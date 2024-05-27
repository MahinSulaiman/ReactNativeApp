import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
 
} from "react-native";
import React,{useState,useEffect,useContext} from "react";
import { useNavigation } from "@react-navigation/native";
import { GetMovies } from "../Api/GetMovies";
import { AllMoviesContext } from "../context/AllMoviesContext";


export default function MovieCards({movieUrl}) {
  const {allMovies,setAllMovies}=useContext(AllMoviesContext)
  
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const cardWidth = windowWidth * 0.35;
  const cardHeight = Dimensions.get("window").height * 0.25;
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
        getData();
      }, []);

      const getData = async () => {
            
              const response = await GetMovies(movieUrl);
              const newMovies = response.data;
              setMovies(newMovies);
              setAllMovies(prevAllMovies => [...prevAllMovies, ...newMovies]);
           
          };
  
  return (
    <ScrollView horizontal>
      {movies && movies.map((movie, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => navigation.navigate("detailed", { movie })}
          >
            <Image
              style={{
                width: cardWidth,
                height: cardHeight,
                margin: 5,
                borderRadius: 5,
              }}
              source={{ uri: movie.posterURL }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
