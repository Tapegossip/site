import { useState, useEffect, useMemo } from 'react';
import { Search, X, BookOpen, Filter, Tags } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { dedupedLibraryItems, allTags, allMediaTypes } from '../data/library';
import ExternalLink from '../components/ExternalLink';
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

const Library = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const {
    searchQuery,
    setSearchQuery,
    selectedTags,
    selectedTypes,
    filteredItems,
    toggleTag,
    toggleType,
    clearFilters
  } = useSearch({ initialItems: dedupedLibraryItems });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTags, selectedTypes]);
  
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  
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
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, or tags..."
            className="w-full pl-10 pr-4 py-2 glass-morphism border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white/20 hover:border-black/40 dark:hover:border-white/20 focus:border-black dark:focus:border-white/20 text-sm bg-transparent transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
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
              {(selectedTags.length > 0 || selectedTypes.length > 0) && (
                <Badge variant="secondary" className="ml-2">
                  {selectedTags.length + selectedTypes.length}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>
                Filter books by type and tags
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-3">Media Type</h3>
              <div className="space-y-2">
                {allMediaTypes.map(type => (
                  <div key={type} className="flex items-center">
                    <Checkbox 
                      id={`type-${type}`} 
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={() => toggleType(type)}
                    />
                    <label 
                      htmlFor={`type-${type}`}
                      className="ml-2 text-sm capitalize"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium">Tags</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="h-7 text-xs"
                >
                  Clear all
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto">
                {allTags.map(tag => (
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
            
            <div className="mt-8">
              <SheetClose asChild>
                <Button className="w-full">Apply Filters</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {selectedTags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <Tags className="h-4 w-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {selectedTags.map(tag => (
              <Badge 
                key={tag}
                variant="secondary"
                className="cursor-pointer capitalize flex items-center gap-1"
                onClick={() => toggleTag(tag)}
              >
                {tag}
                <X className="h-3 w-3" />
              </Badge>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => selectedTags.forEach(tag => toggleTag(tag))}
              className="h-7 text-xs"
            >
              Clear tags
            </Button>
          )}
        </div>
      )}

      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
        </p>
      </div>

      <div className="overflow-x-auto pb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[45%]">Title</TableHead>
              <TableHead className="w-[30%]">Author</TableHead>
              <TableHead className="w-[15%]">Year</TableHead>
              <TableHead className="w-[10%] text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mounted && paginatedItems.length > 0 ? (
              <>
                {paginatedItems.map((item) => (
                  <TableRow
                    key={item.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors dark:hover:bg-white/5 hover:bg-slate-100"
                  >
                    <TableCell className="py-4 pr-4">
                      <div className="font-medium">{item.title}</div>
                    </TableCell>
                    <TableCell className="py-4 pr-4 text-sm">{item.author}</TableCell>
                    <TableCell className="py-4 pr-4 text-sm">{item.publishedYear}</TableCell>
                    <TableCell className="py-4 text-right">
                      <ExternalLink href={item.link} className="text-sm">
                        <span className="sr-only">Visit link for {item.title}</span>
                      </ExternalLink>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center text-muted-foreground">
                  {filteredItems.length === 0 ? (
                    <div className="flex flex-col items-center">
                      <BookOpen className="h-8 w-8 mb-2 opacity-50" />
                      <p>No items found matching your search.</p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-t-primary rounded-full animate-spin"></div>
                    </div>
                  )}
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
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              if (
                pageNum === 1 ||
                pageNum === totalPages ||
                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      isActive={currentPage === pageNum}
                      onClick={() => setCurrentPage(pageNum)}
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
                return <PaginationItem key={pageNum}>...</PaginationItem>;
              }
              
              return null;
            })}
            
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default Library;
