import { createContext, useContext, useState } from "react";

// Cria o contexto
const FavoritesContext = createContext();

// Componente Provider (envolve toda a aplicação)
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Adiciona um filme aos favoritos, evitando duplicatas
  const addFavorite = (film) => {
    if (!favorites.find((f) => f.id === film.id)) {
      setFavorites([...favorites, film]);
    }
  };

  // Remove um filme dos favoritos
  const removeFavorite = (filmId) => {
    setFavorites(favorites.filter((f) => f.id !== filmId));
  };

  // Verifica se um filme está nos favoritos
  const isFavorite = (filmId) => {
    return favorites.some((f) => f.id === filmId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook personalizado para facilitar o uso
export function useFavorites() {
  return useContext(FavoritesContext);
}
