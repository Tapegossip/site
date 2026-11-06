import { useState, useMemo } from 'react';
import type { LibraryItem, MediaType } from '../data/library';

export type TypeFilter = MediaType | 'all';

/** Text search (title, author, category, and the hidden tags), a type tab, and a category filter. */
export function useSearch(items: LibraryItem[], initialType: TypeFilter = 'all') {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<TypeFilter>(initialType);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return items.filter(item =>
      (selectedType === 'all' || item.type === selectedType) &&
      (q === '' ||
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q))) &&
      (selectedCategories.length === 0 || selectedCategories.includes(item.category))
    );
  }, [items, searchQuery, selectedType, selectedCategories]);

  return {
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    selectedCategories,
    filteredItems,
    toggleCategory: (c: string) =>
      setSelectedCategories(prev => (prev.includes(c) ? prev.filter(v => v !== c) : [...prev, c])),
    clearSelections: () => setSelectedCategories([]),
    clearFilters: () => {
      setSelectedCategories([]);
      setSearchQuery('');
    },
  };
}
