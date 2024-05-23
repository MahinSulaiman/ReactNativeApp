import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function MovieCards({movieUrl}) {
  const [movies, setMovies] = useState([]);
  const windowWidth=Dimensions.get("window").width
  const navigation=useNavigation()
  const cardWidth=windowWidth*0.35
  const cardHeight=Dimensions.get("window").height*0.25

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        movieUrl
      );
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // function Navigation(movie){
    
  //    navigation.navigate('MovieDetail',{movie})

  // }
  return (
    <ScrollView horizontal>
      {movies.map((movie, index) => (
        <View key={index}>
          <TouchableOpacity onPress={()=>navigation.navigate("detailed",{movie})}>
          <Image 
            style={{ width:cardWidth , height: cardHeight,margin:5,borderRadius:5 }}
            source={{ uri: movie.posterURL }}
          />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
