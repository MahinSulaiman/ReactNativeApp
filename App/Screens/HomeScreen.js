import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { PosterImgs } from "../components/PosterImgs";
import MovieCards from "../components/MovieCards";
import Brands from "../components/Brands";
import TitleCards from "../components/TitleCards";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.poster}>
        <View style={styles.top}>
          <Image
            style={styles.img}
            source={require("../assets/logo.webp")}
          />

          <TouchableOpacity activeOpacity={5} style={styles.subButton}>
            <Text style={{ color: "yellow", alignSelf: "center" }}>
              Subscribe
            </Text>
          </TouchableOpacity>
        </View>

        <PosterImgs />
      </View>

      <View style={styles.poster}>
        <Text style={styles.titles}>Family Movies</Text>
        <MovieCards movieUrl="https://api.sampleapis.com/movies/family" />
        <Text style={styles.titles}>Animation Movies</Text>
        <MovieCards movieUrl="https://api.sampleapis.com/movies/animation" />
        <Text style={styles.titles}>Horror Movies</Text>
        <MovieCards movieUrl="https://api.sampleapis.com/movies/horror" />

        <Brands />

        <Text style={styles.titles}>Popular Languages</Text>
        <TitleCards useLanguageUrls={true} />

        <Text style={styles.titles}>Popular Genres</Text>
        <TitleCards useLanguageUrls={false} />

        <Text style={styles.titles}>Comedy Movies</Text>
        <MovieCards movieUrl="https://api.sampleapis.com/movies/comedy" />
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
    justifyContent: "center",
    borderRadius: 6,
    width: "20%",
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

  titles: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
