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
import { useNavigation } from "@react-navigation/native";

export default function MovieCards({movies}) {
  
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const cardWidth = windowWidth * 0.35;
  const cardHeight = Dimensions.get("window").height * 0.25;

  
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
