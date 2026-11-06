import { useState, useMemo } from 'react';
import type { LibraryItem } from '../data/library';

const toggle = (list: string[], value: string) =>
  list.includes(value) ? list.filter(v => v !== value) : [...list, value];

export function useSearch(items: LibraryItem[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return items.filter(item =>
      (q === '' ||
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q))) &&
      (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
      (selectedTags.length === 0 || selectedTags.some(tag => item.tags.includes(tag)))
    );
  }, [items, searchQuery, selectedTags, selectedCategories]);

  return {
    searchQuery,
    setSearchQuery,
    selectedTags,
    selectedCategories,
    filteredItems,
    toggleTag: (tag: string) => setSelectedTags(prev => toggle(prev, tag)),
    toggleCategory: (c: string) => setSelectedCategories(prev => toggle(prev, c)),
    clearSelections: () => {
      setSelectedTags([]);
      setSelectedCategories([]);
    },
    clearFilters: () => {
      setSelectedTags([]);
      setSelectedCategories([]);
      setSearchQuery('');
    },
  };
}
