import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, CloseIcon } from './Icons';
import { site } from '../data/content';
import './Header.css';

// One list drives both the desktop pills and the mobile drawer
const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // While the drawer is open: lock page scrolling + let Escape close it
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    // The function we return is the "cleanup": React runs it when
    // menuOpen changes back to false or the component goes away.
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="header container">
      <Link to="/" className="header__logo">
        shyanne <span aria-hidden="true">☁</span>
        <span className="visually-hidden"> — home</span>
      </Link>

      {/* ---------- Desktop nav (hidden on small screens via CSS) ---------- */}
      <nav aria-label="Main" className="header__nav">
        {NAV.map((item) => (
          // NavLink adds aria-current="page" to the current route; global.css styles it
          <NavLink key={item.to} to={item.to} end={item.to === '/'} className="pill">
            {item.label}
          </NavLink>
        ))}
        <ThemeToggle />
      </nav>

      {/* ---------- Mobile controls ---------- */}
      <div className="header__mobile">
        <ThemeToggle />
        <button
          type="button"
          className="icon-btn"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>

      {/* ---------- Side drawer (only rendered while open) ---------- */}
      {menuOpen && (
        <>
          <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
          <nav id="mobile-drawer" className="drawer" aria-label="Main">
            <div className="drawer__top">
              <span className="drawer__title">
                menu <span aria-hidden="true">☁</span>
              </span>
              <button type="button" className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu" autoFocus>
                <CloseIcon />
              </button>
            </div>

            <div className="menu-list drawer__links">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className="menu-link"
                  onClick={() => setMenuOpen(false)} // close the menu once a page is picked
                >
                  {/* NavLink can take a function so we can change the arrow when active */}
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span aria-hidden="true">{isActive ? '✦' : '→'}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="drawer__social">
              <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${site.email}`}>Email</a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
