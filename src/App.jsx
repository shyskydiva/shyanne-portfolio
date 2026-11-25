import ThemeToggle from './components/ThemeToggle';

/* Temporary page shell — swap in the real Header, pages and Footer
   as they get built. */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="container" style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 25 }}>
        <ThemeToggle />
      </header>

      <main id="main" className="container">
        <span className="kicker">head in the clouds, code on the ground</span>
        <h1 className="page-title">Shyanne Cortes</h1>
        <p className="lead">Portfolio in progress.</p>
      </main>
    </>
  );
}
