import React from "react";
import { View, Image, StyleSheet, Button,Text ,Dimensions} from "react-native";
import Swiper from "react-native-swiper";
import {LinearGradient} from "expo-linear-gradient"
export const PosterImgs = () => {
  const height=Dimensions.get("window").height*0.50

  return (
    <View style={{height:height}}>
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
    

      
         <View style={{width:"100%"}}>
           <Text style={{color:"red" }}>Malayalam</Text>
        </View>
        <View style={styles.buttons}>
            <Button title='Watch Now'/>
            <Button title='+'/>
            </View> 
      
      </View>
      <View style={styles.slide}>
        <Image
          source={{
            uri: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-1585237,resizemode-75,msid-109661656/magazines/panache/manjummel-boys-ott-release-announced-check-where-and-when-to-watch-chidambarams-malayalam-blockbuster.jpg",
          }}
          style={styles.image}
        />
       

      
         <View>
           <Text style={{color:"red"}}>Malayalam</Text>
        </View>
          <View style={styles.buttons}>
            <Button title='Watch Now' />
            <Button title='+'/>
            </View> 
      </View>

     
    </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
  height:"100%",
    justifyContent:"flex-start",
    // backgroundColor:"green"
  },
  slide: {
    // flex: 0.4,
    
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "stretch",
    opacity:0.7,
    // aspectRatio:16/9,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    top:20,
   
   
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

  background:{
    height:"100%",
    position:"absolute",
    top:0,
    bottom:0
    
  }
  
});
