import { View, Text ,StyleSheet,Image,ScrollView} from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function MovieCards() {
    const [movies,setMovies]=useState([])

    useEffect(()=>{
        getData()
    },[]);

    const getData=async()=>{
        try{

            const response=await axios.get('https://api.sampleapis.com/movies/family')
           setMovies(response.data)
            // await fetch('https://api.sampleapis.com/movies/family')
            // .then(response=>response.json())
            // .then((Data)=>{
            //     setMovies(Data)
                
            // })

         

        }

        catch(error){
            console.error("Error fetching data:", error);
        }

    }
  return (
    
    <ScrollView horizontal>
       

       {movies.map((movie, index) => (
  <View key={index}>
    
    <Image
      style={{ width: 200, height: 200 }}
      source={{ uri: movie.posterURL }}
    />
  </View>
))}

    
      

    </ScrollView>
  )
}