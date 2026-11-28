import PageHero from '../components/PageHero';
import useDocumentTitle from '../hooks/useDocumentTitle';

/* Placeholder — the rest of the NotFound page goes below the hero. */
export default function NotFound() {
  useDocumentTitle('Page not found');

  return (
    <>
      <PageHero
        kicker="lost in the clouds"
        title="Page not found"
        lead="That page drifted away."
      />
    </>
  );
}
