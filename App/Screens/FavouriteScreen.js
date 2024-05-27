import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";

import { FavouritesContext } from "../context/FavouritesContext";

import ListMovies from "../components/ListMovies";

export default function FavouriteScreen() {
  const { favourites } = useContext(FavouritesContext);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Favourite Movies</Text>
      <ListMovies movies={favourites} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040714",
    marginTop: 35,
  },

  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 15,
  },
});
