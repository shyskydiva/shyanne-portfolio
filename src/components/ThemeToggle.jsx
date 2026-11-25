import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';

/* The round yellow sun/moon button (styled by .icon-btn in global.css).
   aria-pressed tells screen readers whether dark mode is ON. */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="icon-btn icon-btn--star"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* In light mode show a moon ("go dark"); in dark mode show a sun */}
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
