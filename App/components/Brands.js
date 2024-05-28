import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'
import React from 'react'

export default function Brands() {

  const windowWidth = Dimensions.get("window").width;
  
  const cardWidth = windowWidth * 0.31;
 

  return (
    <View style={styles.container}>
        
        <Image
        style={{width:cardWidth,height:80,marginLeft:8,borderRadius:8}}
        source={require("../assets/BrandNames/disney.webp")}
        />
         <Image style={{width:cardWidth,height:80,marginLeft:8,borderRadius:8}}
        source={require("../assets/BrandNames/hotstar.webp")}
        />
         <Image style={{width:cardWidth,height:80,marginLeft:8,borderRadius:8}}
        source={require("../assets/BrandNames/marvel.webp")}
        />

<Image
        style={{width:cardWidth,height:80,marginLeft:8,borderRadius:8,marginTop:10}}
        source={require("../assets/BrandNames/national.webp")}
        />
         <Image style={{width:cardWidth,height:80,marginLeft:8,borderRadius:8,marginTop:10}}
        source={require("../assets/BrandNames/pixar.webp")}
        />
         <Image style={{width:cardWidth,height:80,marginLeft:8,borderRadius:8,marginTop:10}}
        source={require("../assets/BrandNames/starwar.webp")}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:20,
        marginBottom:10
    },
   
})