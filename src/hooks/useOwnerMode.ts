import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const KEY = 'tg-owner';

const read = () => {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
};

/**
 * Personal-only UI (e.g. "Read in my Drive" buttons). Not a security boundary: it only
 * shows links that are useless to anyone else, such as a search of the viewer's own Drive.
 * Turn on per device with ?owner (e.g. /#/library?owner), off with ?owner=off.
 */
export function useOwnerMode() {
  const { search } = useLocation();
  const [isOwner, setIsOwner] = useState(read);

  useEffect(() => {
    const value = new URLSearchParams(search).get('owner');
    if (value === null) return;
    const on = value !== 'off';
    try {
      if (on) localStorage.setItem(KEY, '1');
      else localStorage.removeItem(KEY);
    } catch {
      // Storage blocked: owner mode lasts for this page view only.
    }
    setIsOwner(on);
  }, [search]);

  return isOwner;
}

/** Search the signed-in user's Google Drive for a book by its main title. */
export const driveSearchUrl = (title: string) =>
  `https://drive.google.com/drive/search?q=${encodeURIComponent(title.split(/[:(]/)[0].trim())}`;
