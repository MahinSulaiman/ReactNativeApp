import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

export const PosterImgs = () => {
  const height = Dimensions.get("window").height * 0.5;

  return (
    <View style={{ height: height }}>
      <Swiper
        style={styles.wrapper}
        dot={<View style={styles.dot} />}
        activeDot={<View style={[styles.dot, styles.activeDot]} />}
        autoplay
      >
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Bheeshma.Parvam.jpg/220px-Bheeshma.Parvam.jpg",
            }}
            style={styles.image}
          />

          <LinearGradient
            colors={["transparent", "#040714"]}
            style={styles.gradient}
          />

          <View style={{ width: "100%" }}>
            <Text style={styles.movieTxt}>
              Malayalam . Drama .Thriller . Family
            </Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.watchButton}>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Watch Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.plusButton}>
              <Entypo
                name="plus"
                size={24}
                color="white"
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-1585237,resizemode-75,msid-109661656/magazines/panache/manjummel-boys-ott-release-announced-check-where-and-when-to-watch-chidambarams-malayalam-blockbuster.jpg",
            }}
            style={styles.image}
          />
          <LinearGradient
            colors={["transparent", "#040714"]}
            style={styles.gradient}
          />

          <View>
            <Text style={styles.movieTxt}>
              Malayalam . Drama .Thriller . Family
            </Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.watchButton}>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Watch Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.plusButton}>
              <Entypo
                name="plus"
                size={24}
                color="white"
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    justifyContent: "flex-start",
  },
  slide: {},
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "stretch",
    opacity: 0.8,
  },
  dot: {
    backgroundColor: "gray",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    top: 20,
    // color:"red"
  },
  activeDot: {
    backgroundColor: "white",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: 15,
  },

  background: {
    height: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
  },

  movieTxt: {
    color: "white",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },

  watchButton: {
    backgroundColor: "rgba(128, 128, 128, 0.2)",
    height: 38,
    width: "35%",
    justifyContent: "center",
  },

  plusButton: {
    backgroundColor: "rgba(128, 128, 128, 0.2)",
    height: 38,
    width: "10%",
    justifyContent: "center",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%", 
  },
});
