import { useEffect } from 'react';
import { pageTitle } from '../lib/pageMeta';

/** Sets the browser tab title, e.g. "Library · TapeGossip". */
export function usePageTitle(name?: string) {
  useEffect(() => {
    document.title = pageTitle(name);
  }, [name]);
}
