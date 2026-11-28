import PageHero from '../components/PageHero';
import useDocumentTitle from '../hooks/useDocumentTitle';

/* Placeholder — the rest of the Projects page goes below the hero. */
export default function Projects() {
  useDocumentTitle('Projects');

  return (
    <>
      <PageHero
        kicker="things i’ve built"
        title="Projects"
        lead="Team builds and solo projects. Pick a filter to narrow it down."
      />
    </>
  );
}
