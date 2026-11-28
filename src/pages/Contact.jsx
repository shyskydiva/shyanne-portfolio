import PageHero from '../components/PageHero';
import { CloudIcon } from '../components/Icons';
import useDocumentTitle from '../hooks/useDocumentTitle';

/* Placeholder — the rest of the Contact page goes below the hero. */
export default function Contact() {
  useDocumentTitle('Contact');

  return (
    <>
      {/* The contact form will go in the hero's right column via the `aside` prop */}
      <PageHero
        kicker="say hello"
        kickerIcon={<CloudIcon />}
        title={<>Let’s<br /><span className="highlight">float</span> some<br />ideas</>}
        lead="I'm looking for full-time full-stack, software developer and UX roles starting May 2027. Send a note and I'll get back to you soon."
      />
    </>
  );
}
