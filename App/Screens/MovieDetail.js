import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView} from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MovieCards from "../components/MovieCards";
import { FavouritesContext } from "../context/FavouritesContext";
import { useContext,useState,useEffect } from "react";
import GetMovies from "../Api/GetMovies";


export default function MovieDetail({ route }) {
  const { movie } = route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const {favourites,setFavourites}=useContext(FavouritesContext)
  useEffect(() => {
    setIsFavourite(favourites.some(favorite => favorite.imdbId === movie.imdbId));
  }, [favourites]);

  const AddFavourite = (FavouriteMovie) => {
    // setIsFavourite(favourites.some((favorite) => favorite.id === FavouriteMovie.id));
    if (isFavourite) {
      setFavourites(favourites.filter((movie) => movie.imdbId !== FavouriteMovie.imdbId));
      // setIsFavourite(false);
      console.log("removed");
    } else {
      setFavourites([...favourites, FavouriteMovie]);
      // setIsFavourite(true);
      console.log("added");
      color = "red";
    }
  };
  return (
    <ScrollView style={styles.detailed}>
      <View style={{ margin: 5 }}>
        {/* <Text>MovieDetail</Text> */}
        <Image
          source={{ uri: movie.posterURL }}
          style={{
            width: "100%",
            height: 300,
            borderRadius: 8,
            resizeMode: "stretch",
          }}
        />
      </View>

      <View>
        <View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text
            style={{
              color: "lightblue",
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
            }}
          >
            Newly Added
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
            }}
          >
            2022 . 2h 22m . 4Languages .{" "}
            <Text style={{ backgroundColor: "gray", borderRadius: 5 }}>
              U/A 13+
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
              fontSize: 20,
            }}
          >
            Subscribe to Watch
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color:"gray",fontSize:20,margin:10}}>Joy, Sadness, Anger, Fear and Disgust have been running a successful 
          operation by all accounts. However, when Anxiety shows up,
           they aren't sure how to feel.</Text>
      </View>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      <AntDesign name="plus" size={24} color="white" />
      <MaterialCommunityIcons name="share" size={24} color="white" />
      {/* <Ionicons name="heart-outline" size={24} color="red" filled="red"/> */}
      {/* <TouchableOpacity onpress={AddFavourite({movie})}> */}
      <MaterialCommunityIcons name="cards-heart" size={24} color={isFavourite ? "red":"yellow"}  onPress={() => AddFavourite(movie)}/>
      {/* </TouchableOpacity> */}
      </View>
      

      <View>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" ,marginTop:30}}>More Like This</Text>
      <GetMovies movieUrl="https://api.sampleapis.com/movies/family" />
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
    // marginLeft:"20%",
    color: "white",
    alignSelf: "center",
  },

  detailed: {
    flex: 1,
    backgroundColor: "#040714",
    
  },

  button: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "95%",
    // height: "40%",
    justifyContent: "center",
    marginTop: "5%",
    paddingVertical: 10
  
  },
});
