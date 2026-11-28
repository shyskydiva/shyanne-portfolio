import Avatar from '../components/Avatar';
import PageHero from '../components/PageHero';
import useDocumentTitle from '../hooks/useDocumentTitle';

/* Placeholder — the rest of the Home page goes below the hero. */
export default function Home() {
  useDocumentTitle(); // no page name on Home → "Shyanne Cortes · Portfolio"

  return (
    <>
      <PageHero
        kicker="head in the clouds, code on the ground"
        title={<>Shyanne<br /><span className="highlight">Cortes</span></>}
        lead="Web & Mobile Computing student at RIT building full-stack web apps. Graduating May 2027 and open to full-stack, software developer and UX roles."
        aside={<Avatar variant="home" src="/images/chibi.webp" alt="Chibi illustration of Shyanne" />}
      />
    </>
  );
}
