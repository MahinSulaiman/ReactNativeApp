import react, { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const Favourite = (movie) => {
    return favourites.some((fav) => fav.imdbId === movie.imdbId);
  };

  const toggleFavourite = (movie) => {
    const isFavourite = favourites.some((fav) => fav.imdbId === movie.imdbId);
    if (isFavourite) {
      setFavourites(favourites.filter((fav) => fav.imdbId !== movie.imdbId));
    } else {
      setFavourites([...favourites, movie]);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, toggleFavourite, Favourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
