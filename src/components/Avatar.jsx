import './Avatar.css';

/* The chibi illustration in the page hero, gently floating.
   Images in /public are served from the site root, so
   public/images/chibi.webp is just "/images/chibi.webp".
   - variant="home": standing chibi (size set in Avatar.css)
   - variant="about": coding chibi (size set in Avatar.css) */
export default function Avatar({ src, alt, variant = 'home' }) {
  return (
    <img
      className={`avatar avatar--${variant}`}
      src={src}
      alt={alt}
      width="500" /* both PNGs are square; width + height stop the page jumping while it loads */
      height="500"
    />
  );
}
