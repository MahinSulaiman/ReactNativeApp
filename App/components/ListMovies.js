import { View, Text,StyleSheet,Image,TouchableOpacity ,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ListMovies({movies}) {
    
  
    const windowWidth = Dimensions.get("window").width;
    const navigation = useNavigation();
    const cardWidth = windowWidth * 0.30;
    const cardHeight = Dimensions.get("window").height * 0.25;
    return (
      <View style={styles.container}>
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
       
      </View>
    )
  }
  
  const styles=StyleSheet.create({
    container:{
      flex:1,
      flexWrap:"wrap",
    //   backgroundColor:"black",
      flexDirection:"row"
    
    },
  
    
  })