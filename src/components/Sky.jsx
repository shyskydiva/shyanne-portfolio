import './Sky.css';

/* Decorative background: the gradient sky, stars and puffy clouds.
   Everything here is aria-hidden because it's just decoration. */

const STARS = [
  { top: '6%', left: '40%', size: 18 },
  { top: '16%', left: '62%', size: 12 },
  { top: '8%', left: '86%', size: 22 },
  { top: '40%', left: '6%', size: 14 },
  { top: '58%', left: '52%', size: 12 },
  { top: '80%', left: '90%', size: 16 },
];

// Cloud size comes from Sky.css (253px desktop → 181px mobile, as in Figma)
const CLOUDS = [
  { top: '120px', left: '-60px', opacity: 0.7 },
  { top: '520px', left: '88%', opacity: 0.6 },
  { top: '980px', left: '-40px', opacity: 0.6 },
];

export default function Sky({ children }) {
  return (
    <div className="sky">
      {/* .map() turns each item in the array into an element.
          `key` helps React keep track of list items between renders. */}
      {STARS.map((s, i) => (
        <span
          key={`star-${i}`}
          className="sky__star"
          aria-hidden="true"
          style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: `${i * 0.4}s` }}
        >
          ✦
        </span>
      ))}

      {CLOUDS.map((c, i) => (
        <span
          key={`cloud-${i}`}
          className="puff"
          aria-hidden="true"
          // CSS custom properties can be set inline, then used in Sky.css
          style={{ '--o': c.opacity, top: c.top, left: c.left }}
        />
      ))}

      {children}
    </div>
  );
}
