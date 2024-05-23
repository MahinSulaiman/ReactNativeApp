import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function MovieDetail({route}) {
    const {movie}=route.params;
  return (
    <View style={styles.detailed}>
    <View style={{margin:5}}>
      {/* <Text>MovieDetail</Text> */}
      <Image 
       source={{uri:movie.posterURL}}
       style={{width:"100%",height:300,borderRadius:8,resizeMode:"cover"}}
      />
  
      
    </View>
    {/* <View style={{marginLeft:"20%"}}>
    <Text style={styles.title}>{movie.title}</Text>
    <Text style={{color:"lightblue",fontWeight:"bold",fontSize:20}}>Newly Added</Text>
    <Text style={{color:"white",fontWeight:"bold"}}>2022 . 2h 22m . 4Languages . <Text style={{backgroundColor:"gray",borderRadius:5}}>U/A 13+</Text></Text>
    </View> */}
    <View >
    <View >
    <Text style={styles.title}>{movie.title}</Text>
    <Text style={{color:"lightblue",fontWeight:"bold",fontSize:20 ,alignSelf:"center"}}>Newly Added</Text>
    <Text style={{color:"white",fontWeight:"bold",fontSize:20,alignSelf:"center"}}>2022 . 2h 22m . 4Languages . <Text style={{backgroundColor:"gray",borderRadius:5}}>U/A 13+</Text></Text>
    
    </View>
    

   
    </View>
    <View style={{flexDirection:"row",justifyContent:"center"}}>
    <TouchableOpacity style={styles.button}>
      <Text style={{color:"black",fontWeight:"bold",alignSelf:"center",fontSize:20}} >Subscribe to Watch</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  title:{
    fontSize:50,
    fontWeight:"bold",
    // marginLeft:"20%",
    color:"white",
    alignSelf:"center"

  },

  detailed:{
    flex:1,
    backgroundColor:'#040714'

  },

  button:{
    backgroundColor:"white",
    borderRadius:8,
    width:"95%",
    height:"30%",
    justifyContent:"center",
    marginTop:"5%"
    



  }
})