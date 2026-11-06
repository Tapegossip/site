import { useState, useMemo } from 'react';
import type { LibraryItem, MediaType } from '../data/library';

const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

/** True if a and b differ by at most one inserted, deleted, changed, or swapped-adjacent letter. */
const withinOneEdit = (a: string, b: string) => {
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a.length === b.length) {
    const diffs: number[] = [];
    for (let k = 0; k < a.length && diffs.length <= 2; k++) if (a[k] !== b[k]) diffs.push(k);
    if (diffs.length === 2 && diffs[1] === diffs[0] + 1 &&
        a[diffs[0]] === b[diffs[1]] && a[diffs[1]] === b[diffs[0]]) return true; // "techincal" → "technical"
  }
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else { i++; j++; }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
};

export interface Indexed {
  item: LibraryItem;
  text: string;      // all searchable text, for substring matches
  words: string[];   // individual words, for typo-tolerant matches
}

/** Shorter words get no typo tolerance: "risk" vs "rise", "bond" vs "band" would be noise. */
const MIN_FUZZY_LENGTH = 5;

export const buildIndex = (items: LibraryItem[]): Indexed[] => items.map(item => {
  const text = normalize([item.title, item.author, item.category, ...item.tags].join(' '));
  return { item, text, words: [...new Set(text.split(/[^a-z0-9]+/).filter(Boolean))] };
});

/**
 * Builds a predicate for a query. Every query word must match the start of some word
 * ("rise" finds "rises", not "enterprise"). Only when a word (5+ letters) matches nothing in the
 * whole library is it treated as a typo and allowed one edit ("dopler" → "doppler",
 * "techincal" → "technical"); so "status" never drifts to "states". Words with symbols
 * (e.g. "c++") use a plain substring match.
 */
export const createMatcher = (index: Indexed[], query: string) => {
  const terms = normalize(query).split(/\s+/).filter(Boolean).map(q => {
    if (/[^a-z0-9]/.test(q)) return { q, mode: 'substring' as const };
    const exactSomewhere = index.some(e => e.words.some(w => w.startsWith(q)));
    return { q, mode: !exactSomewhere && q.length >= MIN_FUZZY_LENGTH ? 'fuzzy' as const : 'prefix' as const };
  });
  return (entry: Indexed) => terms.every(({ q, mode }) =>
    mode === 'substring' ? entry.text.includes(q)
      : mode === 'prefix' ? entry.words.some(w => w.startsWith(q))
      : entry.words.some(w => withinOneEdit(q, w)));
};

/** True if every query word starts a word in the title (used to rank title hits first). */
const titleHit = (item: LibraryItem, query: string) => {
  const titleWords = normalize(item.title).split(/[^a-z0-9]+/).filter(Boolean);
  return normalize(query).split(/\s+/).filter(Boolean).every(q => titleWords.some(w => w.startsWith(q)));
};

/**
 * Browsing: one type tab at a time (`browseType`).
 * Searching: results span every type; tapping a tab narrows to it (`narrowType`), tapping again widens.
 * Clearing the search returns to the browsed tab.
 */
export function useSearch(items: LibraryItem[], initialType: MediaType) {
  const [searchQuery, setQuery] = useState('');
  const [browseType, setBrowseType] = useState<MediaType>(initialType);
  const [narrowType, setNarrowType] = useState<MediaType | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const isSearching = searchQuery.trim() !== '';
  /** The type currently shown; null = all types (only while searching). */
  const activeType: MediaType | null = isSearching ? narrowType : browseType;

  const setSearchQuery = (q: string) => {
    if (!isSearching && q.trim() !== '') {
      setNarrowType(null);           // a new search always starts across everything
      setSelectedCategories([]);
    }
    setQuery(q);
  };

  const selectTab = (type: MediaType) => {
    setSelectedCategories([]);
    if (isSearching) setNarrowType(prev => (prev === type ? null : type));
    else setBrowseType(type);
  };

  const index = useMemo(() => buildIndex(items), [items]);

  // Items matching the search text, across all types (drives the per-tab counts).
  const textMatches = useMemo(() => {
    const matches = createMatcher(index, searchQuery);
    const found = index.filter(matches).map(entry => entry.item);
    if (searchQuery.trim() === '') return found;
    // Title hits first, otherwise keep library order (sort is stable).
    return found
      .map(item => ({ item, rank: titleHit(item, searchQuery) ? 0 : 1 }))
      .sort((a, b) => a.rank - b.rank)
      .map(r => r.item);
  }, [index, searchQuery]);

  const countsByType = useMemo(() => textMatches.reduce<Partial<Record<MediaType, number>>>((acc, item) => {
    acc[item.type] = (acc[item.type] ?? 0) + 1;
    return acc;
  }, {}), [textMatches]);

  const filteredItems = useMemo(() => textMatches.filter(item =>
    (activeType === null || item.type === activeType) &&
    (selectedCategories.length === 0 || selectedCategories.includes(item.category))
  ), [textMatches, activeType, selectedCategories]);

  return {
    searchQuery,
    setSearchQuery,
    isSearching,
    browseType,
    activeType,
    selectTab,
    selectedCategories,
    filteredItems,
    countsByType,
    toggleCategory: (c: string) =>
      setSelectedCategories(prev => (prev.includes(c) ? prev.filter(v => v !== c) : [...prev, c])),
    clearSelections: () => setSelectedCategories([]),
    clearFilters: () => {
      setSelectedCategories([]);
      setQuery('');
    },
  };
}
