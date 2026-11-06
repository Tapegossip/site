
import { useState, useEffect, useMemo } from 'react';
import { LibraryItem } from '../data/library';

interface SearchOptions {
  initialItems: LibraryItem[];
  initialFilters?: {
    tags: string[];
    types: string[];
  };
}

export function useSearch({ initialItems, initialFilters = { tags: [], types: [] } }: SearchOptions) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>(initialFilters.tags);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(initialFilters.types);
  
  const filteredItems = useMemo(() => {
    return initialItems.filter(item => {
      // Apply search filter
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Apply tag filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => item.tags.includes(tag));
      
      // Apply type filter
      const matchesTypes = selectedTypes.length === 0 || 
        selectedTypes.includes(item.type);
      
      return matchesSearch && matchesTags && matchesTypes;
    });
  }, [initialItems, searchQuery, selectedTags, selectedTypes]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedTypes([]);
    setSearchQuery('');
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedTags,
    selectedTypes,
    filteredItems,
    toggleTag,
    toggleType,
    clearFilters
  };
}
