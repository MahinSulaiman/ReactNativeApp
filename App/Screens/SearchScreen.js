import { View, Text ,TextInput, StyleSheet,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SearchScreen() {
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
        />            
    </View>
    <Text style={{color:"white",fontWeight:"bold",fontSize:20,marginTop:20}}>Trending in</Text>
    </KeyboardAvoidingView>

    </View>
    
  )
}

const styles=StyleSheet.create({
  container:{
 
    flex:1,
    backgroundColor:"black",
    
    // justifyContent:"center"
    
    
    

  },

  searchBar:{
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: "25%",
    borderRadius: 10,
    height:"20%",
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
    

  }
})