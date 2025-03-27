import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './componentes/Header.jsx';
import { Footer } from './componentes/Footer.jsx';
import { AnimeCard } from './componentes/AnimeCard.jsx';
import Favoritos from './componentes/Favoritos.jsx';
import './App.css';

function App() {
  const [animes, setAnimes] = useState([]);
  const [favoritos, setFavoritos] = useState(() => {
    const saved = localStorage.getItem("favoritos");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    obtenerAnimes();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  async function obtenerAnimes() {
    try {
      const respuesta = await fetch("https://api.jikan.moe/v4/seasons/2022/summer?sfw");
      const datos = await respuesta.json();
      setAnimes(datos.data.slice(0, 90));
    } catch (error) {
      console.error("Hubo un error al obtener los animes:", error.message);
    }
  }

  function toggleFavorito(anime) {
    setFavoritos(prevFavoritos => {
      const isFavorito = prevFavoritos.some(fav => fav.mal_id === anime.mal_id);
      return isFavorito
        ? prevFavoritos.filter(fav => fav.mal_id !== anime.mal_id)
        : [...prevFavoritos, anime];
    });
  }

  function filtrarAnimes() {
    return animes.filter(anime =>
      anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <Router>
      <div className="App">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filtrarAnimes={filtrarAnimes}
        />

        <Routes>
          <Route path="/" element={
            <main>
              <section id="API" className="contenedor-cards anime-grid">
                {filtrarAnimes().map((anime) => (
                  <AnimeCard
                    key={anime.mal_id}
                    anime={anime}
                    isFavorito={favoritos.some(fav => fav.mal_id === anime.mal_id)}
                    onToggleFavorito={toggleFavorito}
                  />
                ))}
              </section>
            </main>
          } />
          
          <Route path="/favoritos" element={
            <Favoritos favoritos={favoritos} setFavoritos={setFavoritos} />
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;