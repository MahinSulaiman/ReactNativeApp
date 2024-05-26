import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { PosterImgs } from "../components/PosterImgs";
import MovieCards from "../components/MovieCards";
import GetMovies from "../Api/GetMovies";
import TitleCards from "../components/TitleCards";


export default function HomeScreen() {

 


  return (
    <ScrollView style={styles.container} >
      <View style={styles.poster}>
        <View style={styles.top}>
          <Image
            style={styles.img}
            source={require("../../assets/logo.webp")}
          />

          <TouchableOpacity activeOpacity={5} style={styles.subButton}>
            <Text style={{ color: "yellow" ,alignSelf:"center"}}>Subscribe</Text>
          </TouchableOpacity>
        </View>

        <PosterImgs />
      </View>

      <View style={styles.poster}>
        <Text style={{ color: "white" }}>Family Movies</Text>
        <GetMovies movieUrl="https://api.sampleapis.com/movies/family" />
        <Text style={{ color: "white" }}>Animation Movies</Text>
        <GetMovies movieUrl="https://api.sampleapis.com/movies/animation" />
        <Text style={{ color: "white" }}>Horror Movies</Text>
        <GetMovies movieUrl="https://api.sampleapis.com/movies/horror"/>
       
        <Text style={{ color: "white" }}>Popular Languages</Text>
        <TitleCards />
        <Text style={{ color: "white" }}>Comedy Movies</Text>
        <GetMovies movieUrl="https://api.sampleapis.com/movies/comedy"/>
        
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#040714",
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
    marginTop: 20,
  },

  subButton: {
    height: 30,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "gold",
    marginTop: 4,
    justifyContent:"center",
    borderRadius:6,
    width:"20%"
  },

  poster: {
    flex: 0.5,

    // height:"50%",
    marginTop: 20,
  },

  top: {
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:"red",
    width: "100%",
    padding: "2%",
    top: "7%",
  },
});
