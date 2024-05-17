import {StyleSheet,View,Text,Image, Button} from 'react-native';
import PosterImg from './PosterImgs';
import logo from "../assets/logo.webp";

export default function Home(){
    return(

        <View style={styles.container}>
            {/* <Text style={{color:"white"}}>Home</Text> */}
            
            <PosterImg/>
            <View style={styles.buttons}>
            <Button title='Watch Now'/>
            <Button title='+'/>
            </View> 
            <View style={styles.logoContainer}>
            <Image style={styles.img}
            
            source={
                require('../assets/logo.webp')
            }
            />
     
            </View >
             
       

            
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
        // color:"white",
    },

    logoContainer:{
        position: 'absolute',
        top: 25, // Adjust this value as needed to position the logo
        left: 20, // Adjust this value as needed to position the logo
        zIndex: 1,
       
    },

    img:{
        width:50,
        height:50,
        resizeMode:"contain"
    },

    buttons:{
    
        flexDirection:"row",
        gap:10,
      
      


    },
    subContainer:{
        backgroundColor:"red",
        width:"100%",
        height:300,
        alignSelf:"flex-start"


    }


})