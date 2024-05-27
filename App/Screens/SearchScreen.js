import { View, Text ,TextInput, StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native'
import React,{useContext,useState} from 'react'
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AllMoviesContext } from '../context/AllMoviesContext';
import ListMovies from '../components/ListMovies';
import SearchMovie from '../components/SearchMovie';

export default function SearchScreen() {

  const {allMovies}=useContext(AllMoviesContext)
  const [searchQuery, setSearchQuery] = useState('');

  return (
    
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height">
      <View  style={styles.searchBar}>
       <View style={styles.icons}> 
      <Feather name="search" size={24} color="black" />
      <MaterialCommunityIcons name="microphone-outline" size={30} color="black" />
      </View>
     
       <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          textAlign="center"        
          placeholder="Movies, shows and more"
          style={styles.input}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />            
    </View>
    {/* <ScrollView>
    
     <ListMovies movies={allMovies}/>
    </ScrollView> */}
    <ScrollView>
    <Text style={styles.title}>Trending in</Text>
    <SearchMovie query={searchQuery}/>
    </ScrollView>
    
    
    </KeyboardAvoidingView>
    

    </View>
    
  )
}

const styles=StyleSheet.create({
  container:{
 
    flex:1,
    backgroundColor:"black",
    paddingTop:"20%"
    
    // justifyContent:"center"
    
    
    

  },

  searchBar:{
    backgroundColor: 'white',
    paddingHorizontal: 20,
    // marginTop: "25%",
    borderRadius: 10,
    height:50,
   justifyContent:"center",
   position:"relative"
 
   
  // alignContent:"center"
    

  },

  icons:{
    flexDirection:"row",
    justifyContent:"space-between"
  },

  input:{
    height:"100%",
    width:"85%",
    backgroundColor:"white",
    position:"absolute",
    alignSelf:"center",
    color:"black",
    fontSize:20,
    

  },

  title:{
     color:"white",
     fontWeight:"bold",
     fontSize:30,
     margin:10
  }
})