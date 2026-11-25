import { site } from '../data/content';
import './Footer.css';

const year = new Date().getFullYear(); // updates itself every January

export default function Footer() {
  return (
    <footer className="footer container">
      <p>© {year} Shyanne Cortes · built with React on cloud nine</p>
      <ul className="footer__links">
        <li><a href={site.github} target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href={`mailto:${site.email}`}>Email</a></li>
      </ul>
    </footer>
  );
}
