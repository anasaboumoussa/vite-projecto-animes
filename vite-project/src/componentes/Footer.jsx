
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Anime API. Todos los derechos reservados.</p>
        
        <ul className="social-links">
          <li>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FontAwesomeIcon icon={faDiscord} className="social-icon" />
              <span className="social-text">Discord</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/anasaboumoussa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
              <span className="social-text">GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/offfx_anas" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              <span className="social-text">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;