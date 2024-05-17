import { Image, View, Text, StyleSheet } from "react-native";



export default function PosterImg() {
  return (
    <View style={styles.container}>
      <Image
        blurRadius={3}
        style={styles.image}
        source={{
          uri: "https://assets-in.bmscdn.com/discovery-catalog/events/et00306242-wgtnpeehad-landscape.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    zIndex:-1,
    // backgroundColor:"red",
    // flex:4,
    
    
  },

  image: {
    // width: "100%",
    // height: "45%",
    aspectRatio:16/9,
    // resizeMode:"stretch",
    opacity:0.7,
    border:"none",
    borderColor:"black",
   
    
  },
});
