import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Filter } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { libraryItems, allCategories, filterTags } from '../data/library';
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

const categoryCounts = libraryItems.reduce<Record<string, number>>((acc, item) => {
  acc[item.category] = (acc[item.category] ?? 0) + 1;
  return acc;
}, {});

const Library = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tableTop = useRef<HTMLDivElement>(null);

  const {
    searchQuery,
    setSearchQuery,
    selectedTags,
    selectedCategories,
    filteredItems,
    toggleTag,
    toggleCategory,
    clearSelections,
    clearFilters
  } = useSearch(libraryItems);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTags, selectedCategories]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    tableTop.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const activeFilters = selectedTags.length + selectedCategories.length;
  const activeChips = [
    ...selectedCategories.map(c => ({ label: c, remove: () => toggleCategory(c) })),
    ...selectedTags.map(t => ({ label: t, remove: () => toggleTag(t) })),
  ];

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  return (
    <div className="page-container">
      <h1 className="page-title">Library</h1>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, category, or tag..."
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
              <SheetDescription>Narrow the library by category and tag</SheetDescription>
            </SheetHeader>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium">Category</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-xs">
                  Clear all
                </Button>
              </div>
              <div className="space-y-2">
                {allCategories.map(category => (
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

            <div className="mt-6">
              <h3 className="text-sm font-medium mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {filterTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer capitalize"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-8 pb-2">
              <SheetClose asChild>
                <Button className="w-full">
                  Show {filteredItems.length} {filteredItems.length === 1 ? 'book' : 'books'}
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

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
          {filteredItems.length} {filteredItems.length === 1 ? 'book' : 'books'}
        </p>
      </div>

      <div className="overflow-x-auto pb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[55%]">Title</TableHead>
              <TableHead className="w-[30%]">Author</TableHead>
              <TableHead className="w-[15%] text-right">Year</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedItems.length > 0 ? (
              paginatedItems.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="py-4 pr-4 align-top">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-blue-500 transition-colors"
                    >
                      {item.title}
                    </a>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5 text-xs text-muted-foreground">
                      <button
                        onClick={() => toggleCategory(item.category)}
                        className={`font-medium hover:text-foreground transition-colors ${selectedCategories.includes(item.category) ? 'text-foreground' : ''}`}
                        title={`Filter by ${item.category}`}
                      >
                        {item.category}
                      </button>
                      {item.tags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`hover:text-blue-500 transition-colors ${selectedTags.includes(tag) ? 'text-blue-500' : ''}`}
                          title={`Filter by "${tag}"`}
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="py-4 pr-4 text-sm align-top pt-4">{item.author}</TableCell>
                  <TableCell className="py-4 text-sm text-right tabular-nums align-top pt-4">
                    {item.publishedYear === undefined
                      ? '—'
                      : item.publishedYear < 0 ? `${-item.publishedYear} BC` : item.publishedYear}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="py-8 text-center text-muted-foreground">
                  <div className="flex flex-col items-center">
                    <BookOpen className="h-8 w-8 mb-2 opacity-50" />
                    <p>No books match your search.</p>
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
    </div>
  );
};

export default Library;
