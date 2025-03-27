import { Link } from 'react-router-dom';
import './Favoritos.css';


function Favoritos({ favoritos, setFavoritos }) {
  const eliminarFavorito = (index) => {
    const nuevosFavoritos = [...favoritos];
    nuevosFavoritos.splice(index, 1);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  return (
    <div>
      <Link to="/" className="button-card">Volver a Animes</Link>

      <main>
        <section id="lista-favoritos" className="contenedor-cards">
          {favoritos.length === 0 ? (
            <div className="mensaje-vacio">
              <p>No tienes animes favoritos aún ):</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/72/Roberto_Baggio_cropped.jpg"
                alt="No hay favoritos"
              />
            </div>
          ) : (
            favoritos.map((anime, index) => (
              <div key={index} className="card">
                
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                />
                <h2>{anime.title}</h2>
                <button
                  onClick={() => eliminarFavorito(index)}
                  className="borrar button-card"
                >
                  Borrar de favoritos
                </button>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Favoritos;