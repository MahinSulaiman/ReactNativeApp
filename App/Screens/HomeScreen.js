import { StyleSheet, View, Text, Image, Button } from "react-native";
// import PosterImg from './PosterImgs';
import { PosterImgs } from "../components/PosterImgs";
import MovieCards from "../components/MovieCards";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.poster}>
      <View style={styles.top}>
        <Image style={styles.img} source={require("../../assets/logo.webp")} />
        <Button title="Subscribe"/>
      </View>

      <PosterImgs />
      </View>
      <View style={styles.buttons}>
            <Button title='Watch Now'/>
            <Button title='+'/>
            </View> 
      {/* <View style={styles.poster}>
      <MovieCards/>
      </View> */}
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:'green'
  },

  logoContainer: {
    position: "absolute",
    top: 25, // Adjust this value as needed to position the logo
    left: 20, // Adjust this value as needed to position the logo
    zIndex: 1,
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
  },


  poster: {
    flex: 0.4,
  },

  top:{
    zIndex:1,
    position:"absolute",
    flexDirection:"row",
    justifyContent:"space-between",
    // backgroundColor:"red",
    width:"100%",
    padding:"2%",
    top:"5%"
  }
});
