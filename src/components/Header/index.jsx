import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ backgroundColor: "#656330", padding: "20px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          color: "white"
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
        <Link to="/favoritos" style={{ textDecoration: "none", color: "white" }}>
          Favoritos
        </Link>
        <Link to="/detalhes" style={{ textDecoration: "none", color: "white" }}>
          Detalhes
        </Link>
      </div>
    </nav>
  );
}
