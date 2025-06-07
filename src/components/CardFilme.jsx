// src/components/CardFilme.jsx
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function CardFilme({ film }) {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const colors = {
    accent: "#00BFFF",
    light: "#2E2E3A"
  };

  return (
    <div
      onClick={() => navigate(`/detalhes/${film.id}`)}
      style={{
        backgroundColor: colors.light,
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        color: "#fff",
        cursor: "pointer",
        transition: "transform 0.2s"
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={film.image}
        alt={film.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />
      <h2 style={{ color: colors.accent }}>{film.title}</h2>
      <p><strong>Diretor:</strong> {film.director}</p>
      <p><strong>Ano:</strong> {film.release_date}</p>
      <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
        {film.description.substring(0, 100)}...
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          isFavorite(film.id) ? removeFavorite(film.id) : addFavorite(film);
        }}
        style={{
          padding: "8px 16px",
          backgroundColor: isFavorite(film.id) ? "#e74c3c" : "#2ecc71",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {isFavorite(film.id) ? "Remover dos Favoritos" : "Favoritar"}
      </button>
    </div>
  );
}
