import { StyleSheet, View, Text, Image, ScrollView,TouchableOpacity,Dimensions } from "react-native";
// import PosterImg from './PosterImgs';
import { PosterImgs } from "../components/PosterImgs";
import MovieCards from "../components/MovieCards";

export default function HomeScreen() {
 
  return (
    <ScrollView style={styles.container}>
    <View style={styles.poster}>
      <View style={styles.top}>
        <Image style={styles.img} source={require("../../assets/logo.webp")} />
        {/* <Button  title="Subscribe"/> */}
        <TouchableOpacity activeOpacity={5} style={styles.subButton}>
          <Text style={{color:"yellow"}}>Subscribe</Text>
        </TouchableOpacity>
        
      </View>
   
      <PosterImgs />

      
      </View>
    
      <View style={styles.poster}>
        <Text style={{color:"white"}}>Family Movies</Text>
      <MovieCards movieUrl="https://api.sampleapis.com/movies/family"/>
      <Text style={{color:"white"}}>Family Movies</Text>
      <MovieCards movieUrl="https://api.sampleapis.com/movies/animation"/>
      </View>
     
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#040714',
  },


  img: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  buttons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop:20
  },

  subButton:{
    height:30,
    backgroundColor:"lightbrown",
    borderWidth:1,
    borderColor:"gold",
    marginTop:4
    // opacity:1
   
  },


  poster: {
    flex: 0.5,
    
    // height:"50%",
    marginTop:20,
  },

  top:{
    zIndex:1,
    position:"absolute",
    flexDirection:"row",
    justifyContent:"space-between",
    // backgroundColor:"red",
    width:"100%",
    padding:"2%",
    top:"7%"
  }
});
