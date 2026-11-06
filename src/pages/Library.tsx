import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, BookOpen, Filter, Play, FolderOpen } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { useOwnerMode, driveSearchUrl } from '../hooks/useOwnerMode';
import { libraryItems, allCategories, mediaTypes, type LibraryItem, type MediaType } from '../data/library';
import VideoDialog from '../components/VideoDialog';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '../components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '../components/ui/pagination';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '../components/ui/sheet';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';

const ITEMS_PER_PAGE = 15;

// One tab per type that has items; the first (Books) is where browsing starts.
const tabs = mediaTypes.filter(t => libraryItems.some(item => item.type === t.type));
const isTabType = (v: string | null): v is MediaType => !!v && tabs.some(t => t.type === v);

const typeLabel: Record<MediaType, string> = {
  book: 'Book', article: 'Article', paper: 'Paper', video: 'Video', podcast: 'Podcast', website: 'Website',
};
/** Where a full-text match came from (see `src` in scripts/library.py). */
const matchSource: Record<string, string> = {
  transcript: 'in transcript', description: 'in video description', article: 'in article',
  site: 'on site', paper: 'in paper', catalog: 'in book subjects',
};

/** "12 videos", or "12 results" for a search across every type. */
const countLabel = (type: MediaType | null, n: number) => {
  const word = type === null ? 'result' : typeLabel[type].toLowerCase();
  return `${n} ${word}${n === 1 ? '' : 's'}`;
};

const Library = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [playing, setPlaying] = useState<LibraryItem | null>(null);
  const tableTop = useRef<HTMLDivElement>(null);
  const isOwner = useOwnerMode();
  const [params, setParams] = useSearchParams();
  const urlType = params.get('type');

  const {
    searchQuery,
    setSearchQuery,
    isSearching,
    activeType,
    selectTab,
    selectedCategories,
    filteredItems,
    countsByType,
    matchInfo,
    toggleCategory,
    clearSelections,
    clearFilters
  } = useSearch(libraryItems, isTabType(urlType) ? urlType : tabs[0].type);

  const onTabClick = (type: MediaType) => {
    // While browsing, keep the tab in the URL so e.g. /#/library?type=video can be bookmarked.
    if (!isSearching) {
      const next = new URLSearchParams(params);
      if (type === tabs[0].type) next.delete('type'); else next.set('type', type);
      next.delete('owner');
      setParams(next, { replace: true });
    }
    selectTab(type);
  };

  // Category counts follow what's shown (one type, or everything while searching).
  const categoryCounts = useMemo(() => libraryItems.reduce<Record<string, number>>((acc, item) => {
    if (activeType === null || item.type === activeType) acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {}), [activeType]);
  const visibleCategories = allCategories.filter(c => categoryCounts[c]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeType, selectedCategories]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    tableTop.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const activeFilters = selectedCategories.length;
  const activeChips = selectedCategories.map(c => ({ label: c, remove: () => toggleCategory(c) }));

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  return (
    <div className="page-container">
      <h1 className="page-title">Library</h1>

      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search everything: title, author, or topic..."
            aria-label="Search the library"
            className="w-full pl-10 pr-10 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring text-sm bg-transparent transition-colors [&::-webkit-search-cancel-button]:hidden"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="flex gap-2 items-center" variant="outline">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              {activeFilters > 0 && (
                <Badge variant="secondary" className="ml-1">{activeFilters}</Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Narrow the library by category</SheetDescription>
            </SheetHeader>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium">Category</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-xs">
                  Clear all
                </Button>
              </div>
              <div className="space-y-2">
                {visibleCategories.map(category => (
                  <div key={category} className="flex items-center">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm flex-grow cursor-pointer">
                      {category}
                    </label>
                    <span className="text-xs text-muted-foreground">{categoryCounts[category]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pb-2">
              <SheetClose asChild>
                <Button className="w-full">
                  Show {countLabel(activeType, filteredItems.length)}
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {tabs.length > 1 && (
        <div className="mb-6 -mx-4 px-4 overflow-x-auto scrollbar-none">
          <div role="tablist" aria-label="Media type" className="flex gap-2 w-max">
            {tabs.map(tab => {
              const selected = activeType === tab.type;
              const count = isSearching ? (countsByType[tab.type] ?? 0) : null;
              return (
                <button
                  key={tab.type}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => onTabClick(tab.type)}
                  disabled={count === 0 && !selected}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap disabled:opacity-40 disabled:cursor-default ${
                    selected
                      ? 'bg-foreground text-background border-foreground'
                      : 'border-border text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                  {count !== null && <span className="ml-1 opacity-60 tabular-nums">{count}</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {activeChips.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          {activeChips.map(({ label, remove }) => (
            <Badge
              key={label}
              variant="secondary"
              className="cursor-pointer capitalize flex items-center gap-1"
              onClick={remove}
            >
              {label}
              <X className="h-3 w-3" />
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={clearSelections} className="h-7 text-xs">
            Clear filters
          </Button>
        </div>
      )}

      <div ref={tableTop} className="mb-4 scroll-mt-24">
        <p className="text-sm text-muted-foreground">
          {countLabel(activeType, filteredItems.length)}
        </p>
      </div>

      <div className="overflow-x-auto pb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[55%]">Title</TableHead>
              <TableHead className="w-[30%]">By</TableHead>
              <TableHead className="w-[15%] text-right">Year</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedItems.length > 0 ? (
              paginatedItems.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="py-4 pr-4 align-top">
                    {item.type === 'video' ? (
                      <button
                        onClick={() => setPlaying(item)}
                        className="font-medium text-left hover:text-blue-500 transition-colors inline-flex items-start gap-1.5"
                      >
                        <Play className="h-3.5 w-3.5 mt-1 shrink-0 fill-current" aria-hidden="true" />
                        <span>{item.title}</span>
                      </button>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-blue-500 transition-colors"
                      >
                        {item.title}
                      </a>
                    )}
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                      <span>
                        {(item.type !== 'book' || activeType === null) && `${typeLabel[item.type]} · `}
                        {item.category}
                      </span>
                      {isOwner && item.type === 'book' && (
                        <a
                          href={driveSearchUrl(item.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600"
                        >
                          <FolderOpen className="h-3 w-3" aria-hidden="true" />
                          Read
                        </a>
                      )}
                    </div>
                    {matchInfo.has(item.id) && (
                      <div className="mt-1 text-xs text-muted-foreground italic">
                        Found {matchSource[matchInfo.get(item.id)!.src] ?? 'in its text'}:{' '}
                        <span className="not-italic text-foreground/80">{matchInfo.get(item.id)!.words.join(', ')}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="py-4 pr-4 text-sm align-top pt-4">{item.author}</TableCell>
                  <TableCell className="py-4 text-sm text-right tabular-nums align-top pt-4">
                    {item.publishedYear === undefined
                      ? (item.type === 'book' ? '—' : '')
                      : item.publishedYear < 0 ? `${-item.publishedYear} BC` : item.publishedYear}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="py-8 text-center text-muted-foreground">
                  <div className="flex flex-col items-center">
                    <BookOpen className="h-8 w-8 mb-2 opacity-50" />
                    <p>Nothing matches your search.</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => {
              if (
                pageNum === 1 ||
                pageNum === totalPages ||
                Math.abs(pageNum - currentPage) <= 1
              ) {
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      isActive={currentPage === pageNum}
                      onClick={() => goToPage(pageNum)}
                      className="cursor-pointer"
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              if (
                (pageNum === 2 && currentPage > 3) ||
                (pageNum === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return <PaginationItem key={pageNum}>…</PaginationItem>;
              }
              return null;
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <VideoDialog video={playing} onClose={() => setPlaying(null)} />
    </div>
  );
};

export default Library;
