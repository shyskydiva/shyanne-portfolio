import { useEffect } from 'react';

/**
 * Sets the browser tab title for each page, e.g. "About · Shyanne Cortes".
 * Screen readers also announce the title when the page changes.
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Shyanne Cortes` : 'Shyanne Cortes · Portfolio';
  }, [title]);
}
