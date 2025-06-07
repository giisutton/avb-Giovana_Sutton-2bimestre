// src/pages/Home/index.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useFavorites } from "../../context/FavoritesContext";
import CardFilme from "../../components/CardFilme.jsx";



export default function Home() {
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const colors = {
    background: "#1E1E2F",
    text: "#FFFFFF",
    accent: "#00BFFF",
    light: "#2E2E3A"
  };

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://ghibliapi.vercel.app/films");
        setFilms(response.data.slice(0, 10)); // limitar para 10 filmes
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: colors.background,
      minHeight: "100vh",
      padding: "20px",
      color: colors.text
    }}>
      <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 20px",
            width: "80%",
            maxWidth: "600px",
            border: `2px solid ${colors.accent}`,
            borderRadius: "25px",
            backgroundColor: "#fff",
            color: "#000"
          }}
        />
      </form>

      {loading ? (
        <p style={{ textAlign: "center" }}>Carregando filmes...</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          {filteredFilms.map(film => (
            <CardFilme key={film.id} film={film} />
          ))}
        </div>
      )}
    </div>
  );
}
