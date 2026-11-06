import { useState, useMemo, useEffect } from 'react';
import { loadSearchIndex, type LibraryItem, type MediaType, type SearchIndex } from '../data/library';

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
  text: string;      // title, author, category, tags, note: for substring matches
  words: string[];   // the same, as words
  extra: string[];   // words from the full-text index (transcript, article, book subjects)
  src?: string;      // where `extra` came from
}

/** Why an item matched, when it was only through the full-text index. */
export interface MatchInfo {
  src: string;       // transcript, article, catalog, ...
  words: string[];   // the indexed words that matched (e.g. "doppler" for a search of "dopler")
}

/** Shorter words get no typo tolerance: "risk" vs "rise", "bond" vs "band" would be noise. */
const MIN_FUZZY_LENGTH = 5;

const toWords = (text: string) => [...new Set(text.split(/[^a-z0-9]+/).filter(Boolean))];

export const buildIndex = (items: LibraryItem[], fullText: SearchIndex = {}): Indexed[] => items.map(item => {
  const text = normalize([item.title, item.author, item.category, item.note ?? '', ...item.tags].join(' '));
  const entry = fullText[item.id];
  return { item, text, words: toWords(text), extra: entry ? entry.w.split(' ') : [], src: entry?.src };
});

/**
 * Builds a matcher for a query. Every query word must match the start of some word
 * ("rise" finds "rises", not "enterprise"). Only when a word (5+ letters) matches nothing in the
 * whole library is it treated as a typo and allowed one edit ("dopler" → "doppler",
 * "techincal" → "technical"); so "status" never drifts to "states". Words with symbols
 * (e.g. "c++") use a plain substring match.
 *
 * The matcher returns null for no match, otherwise the words that matched only via the
 * full-text index (empty if everything matched the title/author/tags).
 */
export const createMatcher = (index: Indexed[], query: string) => {
  const terms = normalize(query).split(/\s+/).filter(Boolean).map(q => {
    if (/[^a-z0-9]/.test(q)) return { q, mode: 'substring' as const };
    const exactSomewhere = index.some(e => e.words.some(w => w.startsWith(q)) || e.extra.some(w => w.startsWith(q)));
    return { q, mode: !exactSomewhere && q.length >= MIN_FUZZY_LENGTH ? 'fuzzy' as const : 'prefix' as const };
  });
  const test = (q: string, mode: 'prefix' | 'fuzzy') =>
    mode === 'prefix' ? (w: string) => w.startsWith(q) : (w: string) => withinOneEdit(q, w);

  return (entry: Indexed): string[] | null => {
    const viaIndex: string[] = [];
    for (const { q, mode } of terms) {
      if (mode === 'substring') {
        if (entry.text.includes(q)) continue;
        if (entry.extra.some(w => w.includes(q))) { viaIndex.push(q); continue; }
        return null;
      }
      const hit = test(q, mode);
      if (entry.words.some(hit)) continue;
      const found = entry.extra.find(hit);
      if (!found) return null;
      viaIndex.push(found);
    }
    return viaIndex;
  };
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

  // The full-text index is a separate file, fetched the first time someone searches.
  const [fullText, setFullText] = useState<SearchIndex | null>(null);
  useEffect(() => {
    if (!isSearching || fullText) return;
    let cancelled = false;
    loadSearchIndex().then(idx => { if (!cancelled) setFullText(idx); }).catch(() => {});
    return () => { cancelled = true; };
  }, [isSearching, fullText]);

  const index = useMemo(() => buildIndex(items, fullText ?? {}), [items, fullText]);

  // Items matching the search text, across all types (drives the per-tab counts),
  // plus why each matched when it was only through its transcript / text / subjects.
  const { textMatches, matchInfo } = useMemo(() => {
    const matcher = createMatcher(index, searchQuery);
    const info = new Map<string, MatchInfo>();
    const hits: { item: LibraryItem; rank: number }[] = [];
    for (const entry of index) {
      const via = matcher(entry);
      if (via === null) continue;
      if (via.length) info.set(entry.item.id, { src: entry.src ?? 'index', words: [...new Set(via)] });
      // Title hits first, then title/author/tag hits, then full-text-only hits; stable otherwise.
      hits.push({ item: entry.item, rank: titleHit(entry.item, searchQuery) ? 0 : via.length ? 2 : 1 });
    }
    if (searchQuery.trim() !== '') hits.sort((a, b) => a.rank - b.rank);
    return { textMatches: hits.map(h => h.item), matchInfo: info };
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
    matchInfo,
    toggleCategory: (c: string) =>
      setSelectedCategories(prev => (prev.includes(c) ? prev.filter(v => v !== c) : [...prev, c])),
    clearSelections: () => setSelectedCategories([]),
    clearFilters: () => {
      setSelectedCategories([]);
      setQuery('');
    },
  };
}
