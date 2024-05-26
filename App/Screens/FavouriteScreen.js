import { View, Text,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import MovieCards from '../components/MovieCards'
import { FavouritesContext } from '../context/FavouritesContext'


export default function FavouriteScreen() {
  const {favourites}=useContext(FavouritesContext)
  return (
    <View style={styles.container}>
      {/* <Text>AccountScreen</Text> */}
     {/* <View style={styles.cards}> */}
      <MovieCards movies={favourites}/>
      {/* </View> */}
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexWrap:"wrap",
    backgroundColor:"black"
  
  },

  cards:{
    // flex: 1,
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // justifyContent: 'center', // Adjust alignment as needed
    // alignItems: 'flex-start', // Align items at the start of each line
    // padding: 10,
  }
})