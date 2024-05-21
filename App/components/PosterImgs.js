// import { Image, View, Text, StyleSheet } from "react-native";



// export default function PosterImg() {
  

//   return (
//     <View style={styles.container}>
//       <Image
//         blurRadius={3}
//         style={styles.image}
//         source={{
//           uri: "https://assets-in.bmscdn.com/discovery-catalog/events/et00306242-wgtnpeehad-landscape.jpg",
//         }}
//       />
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
   
//     zIndex:-1,
//     backgroundColor:"red",
//     // width: "100%",
//     height: "45%",
    
    
    
    
//   },

//   image: {
    
//     // aspectRatio:16/9,
//     resizeMode:"cover",
//     opacity:0.7,
//     border:"none",
//     height:"100%",
    
   
    
//   },

 
// });

import React from 'react';
import { View, Image, StyleSheet ,Button} from 'react-native';
import Swiper from 'react-native-swiper';

export const  PosterImgs = () => {
  return (
    <Swiper  style={styles.wrapper}
    dot={<View style={styles.dot} />}
    activeDot={<View style={[styles.dot, styles.activeDot]} />}
     autoplay>
      <View style={styles.slide}>
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Bheeshma.Parvam.jpg/220px-Bheeshma.Parvam.jpg'}}
          style={styles.image}
        />
         <View style={styles.buttons}>
            <Button title='Watch Now'/>
            <Button title='+'/>
            </View> 
      </View>
      <View style={styles.slide}>
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Bheeshma.Parvam.jpg/220px-Bheeshma.Parvam.jpg'}}
          style={styles.image}
        />
        
        
          
      </View>

      
      {/* Add more slides as needed */}
    </Swiper>
  );
};


const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    // flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    // aspectRatio:16/9,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    // marginTop: 3,
    // marginBottom: 100,
    // marginVertical:"100%",
  },
  activeDot: {
    backgroundColor: 'white',
  },
  buttons:{
    
    flexDirection:"row",
    gap:10,
    justifyContent:"center",
    marginTop:15,
       
  
  


},
});
