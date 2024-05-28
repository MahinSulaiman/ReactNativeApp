import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AllMoviesContext } from "../context/AllMoviesContext";
import ListMovies from "../components/ListMovies";

export default function SearchMovie({ query }) {
  const { allMovies } = useContext(AllMoviesContext);

  const uniqueMovies = allMovies.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.imdbId === movie.imdbId)
  );

  const filteredMovies = uniqueMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <ListMovies movies={query === "" ? uniqueMovies : filteredMovies} />
    </>
  );
}
