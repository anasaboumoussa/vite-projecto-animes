import { useState } from 'react';
import Button from './Button.jsx';
import './AnimeCard.css';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export function AnimeCard({ anime, isFavorito, onToggleFavorito }) {
  const [showTrailerModal, setShowTrailerModal] = useState(false);

  const handleFavoritoClick = (e) => {
    e.stopPropagation(); // Previene la propagación del evento
    onToggleFavorito(anime);
    
    const heart = document.createElement('div');
    heart.className = 'heart-animation';
    heart.style.left = `${e.clientX - 20}px`;
    heart.style.top = `${e.clientY - 20}px`;
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 1000);
  };

  return (
    <div className="card">
      <img 
        src={anime.images?.jpg?.image_url || 'https://via.placeholder.com/300x450'} 
        alt={anime.title} 
        loading="lazy"
      />
      <h2>{anime.title}</h2>
      
      <div className="card-actions">
        {anime.trailer?.embed_url && (
          <Button 
            text={showTrailerModal ? 'Ocultar Trailer' : 'Ver Trailer'}
            onClick={() => setShowTrailerModal(!showTrailerModal)}
            type="primary"
          />
        )}
        
        <Button 
          text={
            <FontAwesomeIcon 
              icon={isFavorito ? faHeart : farHeart} 
              className="heart-icon"
            />
          }
          onClick={handleFavoritoClick}
          type={isFavorito ? 'favorite-active' : 'favorite-inactive'}
        />
      </div>
      
      {showTrailerModal && (
        <div className="modal-overlay" onClick={() => setShowTrailerModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button"
              onClick={() => setShowTrailerModal(false)}
            >
              &times;
            </button>
            
            <iframe
              src={anime.trailer.embed_url}
              width="100%"
              height="400"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Trailer de ${anime.title}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimeCard;