
import { LibraryItem } from '../types';
import { investingBooks } from './investing-books';
import { tradingBooks } from './trading-books';
import { financeProfessionalBooks } from './finance-professional-books';

// Combine all finance books
export const financeBooks: LibraryItem[] = [
  ...investingBooks,
  ...tradingBooks,
  ...financeProfessionalBooks
];
