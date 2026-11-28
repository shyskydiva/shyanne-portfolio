import './ProjectCard.css';

/* One reusable card for a project. Built on the global .card styles.
   - variant="compact" (Home): image, tags, label, title
   - variant="full" (Projects): image, label + date, title, description, tags, links
   Props are like function arguments for components. */
export default function ProjectCard({ project, variant = 'compact' }) {
  const { title, label, when, thumb, desc, tags, links } = project; // "destructuring" pulls fields out of the object
  const isFull = variant === 'full';

  const tagList = (
    <ul className="tag-list" aria-label="Built with">
      {tags.map((t) => (
        <li key={t} className="tag">{t}</li>
      ))}
    </ul>
  );

  return (
    <article className={`card project-card ${isFull ? '' : 'card--compact'}`}>
      {/* Screenshot, or the sky gradient as a placeholder until there is one */}
      <div className="project-card__thumb">
        {thumb && <img src={thumb} alt={`Screenshot of ${title}`} loading="lazy" />}
      </div>

      {!isFull && tagList}

      <p className="project-card__meta">
        <span className="project-card__label">{label}</span>
        {isFull && <span className="meta">{when}</span>}
      </p>
      <h3 className="card-title">{title}</h3>

      {isFull && (
        <>
          <p className="card-text">{desc}</p>
          {tagList}
          <div className="project-card__links">
            {links.map((link) => (
              <a
                key={link.label}
                className="text-link text-link--small"
                href={link.href}
                // external links open in a new tab; rel="noreferrer" is a security best practice
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </article>
  );
}
