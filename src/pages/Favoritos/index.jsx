// src/pages/Favoritos/index.jsx
import { useFavorites } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";

export default function Favoritos() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div style={{ backgroundColor: "#111", minHeight: "100vh", padding: "20px", color: "white" }}>
      <Link to="/" style={{
        display: 'inline-block',
        padding: '10px 15px',
        backgroundColor: '#E50914',
        color: 'white',
        borderRadius: '5px',
        marginBottom: '20px',
        textDecoration: 'none'
      }}>
        ← Voltar para Home
      </Link>

      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Meus Filmes Favoritos</h1>

      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Nenhum filme favoritado ainda.</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          {favorites.map((film) => (
            <div key={film.id} style={{ backgroundColor: '#222', padding: '20px', borderRadius: '10px' }}>
              <img
                src={film.image}
                alt={film.title}
                style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h3>{film.title}</h3>
              <p>{film.description?.substring(0, 100)}...</p>
              <button
                onClick={() => removeFavorite(film.id)}
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  backgroundColor: "#e74c3c",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Remover dos Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
