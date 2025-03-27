import { Link } from 'react-router-dom';
import './Header.css';

export function Header({ searchTerm, setSearchTerm, filtrarAnimes }) {
  return (
    <header>
      <div className="header-content">
        <h1>Anime API</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><a href="#about">Acerca de</a></li>
            <li><Link to="/favoritos" className="button-card">Favoritos</Link></li>
          </ul>
          <div className="search-container">
            <label htmlFor="search-bar"></label>
            <input
              type="text"
              id="search-bar"
              placeholder="Buscar tu anime favorito"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && filtrarAnimes()}
            />
            <button className="search-button" onClick={filtrarAnimes}>
              🔍
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;