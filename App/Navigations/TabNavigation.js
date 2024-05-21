// import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import AccountScreen from '../Screens/AccountScreen';
import DownloadScreen from '../Screens/DownloadScreen';
import SearchScreen from '../Screens/SearchScreen';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import NewScreen from '../Screens/NewScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
   <Tab.Navigator  screenOptions={{headerShown:false, tabBarActiveTintColor:"white"}}   >
    <Tab.Screen name='Home' component={HomeScreen} 
      options={{tabBarIcon:({color})=>(

        <Foundation name="home" size={24} color={color} />

      ),tabBarStyle:{backgroundColor:'black' }}}
    />
    <Tab.Screen name='Search' component={SearchScreen}
      options={{tabBarIcon:({color})=>(

        <Feather name="search" size={24} color={color}/>

      ),tabBarStyle:{backgroundColor:'black'}}}
      
    />

<Tab.Screen name='New & Hot' component={NewScreen}
      options={{tabBarIcon:({color})=>(

        <SimpleLineIcons name="fire" size={24} color={color} />

      ),tabBarStyle:{backgroundColor:'black'}}}
    />

<Tab.Screen name='Downloads' component={DownloadScreen}
      options={{tabBarIcon:({color})=>(

        <Octicons name="download" size={24} color={color} />

      ),tabBarStyle:{backgroundColor:'black'}}}
    />

    <Tab.Screen name='My Space' component={AccountScreen}
     options={{tabBarIcon:({color})=>(

        <MaterialIcons name="account-circle" size={24} color={color} />

      ),tabBarStyle:{backgroundColor:'black'}}}
    />
   
    

   </Tab.Navigator>
  )
}