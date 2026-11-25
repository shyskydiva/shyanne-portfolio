import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Sky from './Sky';
import Header from './Header';
import Footer from './Footer';

/* The frame every page shares: sky + header + (page) + footer.
   <Outlet /> is where React Router drops the current page. */
export default function Layout() {
  const { pathname } = useLocation();

  // Scroll back to the top whenever you go to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Sky>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className="container" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </Sky>
  );
}