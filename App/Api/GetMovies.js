import { useState, useEffect } from "react";
import axios from "axios";
import MovieCards from "../components/MovieCards";
import { View,ScrollView } from "react-native";

export default function GetMovies({ movieUrl }) {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(movieUrl);
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return(
      <ScrollView>
          <MovieCards movies={movies}/>
      </ScrollView>

  );
}

 
           