import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams(); // Pega o ID da URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://ghibliapi.vercel.app/films/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading)
    return (
      <div style={{ backgroundColor: "#111", color: "#fff", padding: "40px", textAlign: "center" }}>
        Carregando filme...
      </div>
    );

  if (!movie)
    return (
      <div style={{ backgroundColor: "#111", color: "#fff", padding: "40px", textAlign: "center" }}>
        Filme não encontrado.
      </div>
    );

  return (
    <div style={{ backgroundColor: "#111", minHeight: "100vh", padding: "20px", color: "#fff" }}>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "10px 15px",
          backgroundColor: "#E50914",
          color: "white",
          borderRadius: "5px",
          marginBottom: "20px",
          textDecoration: "none",
        }}
      >
        ← Voltar para Home
      </Link>

      <div style={{
        backgroundColor: "#222",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
      }}>
        <img
          src={movie.image}
          alt={movie.title}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        />
        <h2>{movie.title}</h2>
        <p><strong>Direção:</strong> {movie.director}</p>
        <p><strong>Ano:</strong> {movie.release_date}</p>
        <p style={{ marginTop: "10px", lineHeight: "1.5" }}>{movie.description}</p>
      </div>
    </div>
  );
}
