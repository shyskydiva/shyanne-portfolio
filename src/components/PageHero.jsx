import { SparkleIcon } from './Icons';

/* The top of every page: kicker, big title, lead paragraph.
   Using one component keeps every page lined up the same way.

   Props:
   - kicker:     small pill text above the title
   - kickerIcon: icon in front of the kicker text (sparkle by default; Contact uses a cloud)
   - title:      the heading (can include <br /> and <span className="highlight">)
   - lead:       the intro paragraph
   - wideTitle:  let the title run past the lead's width (About)
   - aside:      what goes in the other column — the chibi, or the contact form
   - asideFirst: put the aside on the left on desktop (About)
   - children:   anything under the lead, e.g. a button */
export default function PageHero({ kicker, kickerIcon = <SparkleIcon />, title, lead, wideTitle = false, aside, asideFirst = false, children }) {
  return (
    <section className="hero">
      {asideFirst && aside}
      <div className="hero__text">
        <span className="kicker">
          {kickerIcon}
          {kicker}
        </span>
        <h1 className={`page-title ${wideTitle ? 'page-title--wide' : ''}`}>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
      {!asideFirst && aside}
    </section>
  );
}
