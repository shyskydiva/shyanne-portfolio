/* Small inline SVG icons. `currentColor` means they take the text
   color of whatever they sit inside, so they re-color with the theme.
   aria-hidden hides them from screen readers (the button labels do the talking). */

const base = {
  width: 24,   /* 24px icon + 10px padding = 44px round button, as in Figma */
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const MoonIcon = () => (
  <svg {...base} strokeWidth="2.2">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const SunIcon = () => (
  <svg {...base} strokeWidth="2.2">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MenuIcon = () => (
  <svg {...base} strokeWidth="2.4">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = () => (
  <svg {...base} strokeWidth="2.4">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

/* Four-point sparkle in front of the kicker text — filled, 14px (Figma) */
export const SparkleIcon = () => (
  <svg {...base} width={14} height={14} fill="currentColor" stroke="none">
    <path d="M12 0c.9 6.4 5.6 11.1 12 12-6.4.9-11.1 5.6-12 12-.9-6.4-5.6-11.1-12-12C6.4 11.1 11.1 6.4 12 0z" />
  </svg>
);

/* Little filled cloud — the Contact page kicker icon, 14px wide (Figma) */
export const CloudIcon = () => (
  <svg {...base} width={14} height={9} viewBox="0 -1 24 15" fill="currentColor" stroke="none">
    <path d="M6 14a5 5 0 0 1-.6-10A6.5 6.5 0 0 1 17.6 3.2 5.4 5.4 0 1 1 18.5 14z" />
  </svg>
);
