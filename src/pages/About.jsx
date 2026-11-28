import Avatar from '../components/Avatar';
import PageHero from '../components/PageHero';
import useDocumentTitle from '../hooks/useDocumentTitle';

/* Placeholder — the rest of the About page goes below the hero. */
export default function About() {
  useDocumentTitle('About');

  return (
    <>
      {/* About is the one page with the image on the left (Figma) */}
      <PageHero
        kicker="about me"
        title={<>Hi, I’m <span className="highlight">Shyanne</span></>}
        wideTitle
        lead="Page coming soon."
        aside={<Avatar variant="about" src="/images/chibi2.webp" alt="Chibi illustration of Shyanne coding on a laptop" />}
        asideFirst
      />
    </>
  );
}
