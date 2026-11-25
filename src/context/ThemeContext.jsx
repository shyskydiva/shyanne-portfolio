/* =========================================================
   ThemeContext — shares "light" or "dark" with every component.

   Why a context? The toggle lives in the Header, but other
   components may want to know the theme too. Context lets any
   component read it without passing props down through every level.
   ========================================================= */
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

// Figure out the starting theme. index.html already set data-theme
// before React loaded, so we just read it back.
function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Runs every time `theme` changes:
  // 1) puts data-theme on <html> so the CSS variables swap
  // 2) remembers the choice for next visit
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* private browsing can block storage — the site still works */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// Small helper so components can write `const { theme } = useTheme()`
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
