// import { View, Text } from 'react-native'
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import FavouriteScreen from "../Screens/FavouriteScreen";
import DownloadScreen from "../Screens/DownloadScreen";
import SearchScreen from "../Screens/SearchScreen";
import MovieDetail from "../Screens/MovieDetail";
import {
  Foundation,
  Feather,
  Octicons,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import NewScreen from "../Screens/NewScreen";
import { FavouritesContext } from "../context/FavouritesContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigation() {
  const { FavouriteCount } = useContext(FavouritesContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
          tabBarStyle: { backgroundColor: "black" },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),

          tabBarStyle: { backgroundColor: "black" },
        }}
      />

      <Tab.Screen
        name="New & Hot"
        component={NewScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="fire" size={24} color={color} />
          ),
          tabBarStyle: { backgroundColor: "black" },
        }}
      />

      <Tab.Screen
        name="Downloads"
        component={DownloadScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="download" size={24} color={color} />
          ),
          tabBarStyle: { backgroundColor: "black" },
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            // <MaterialIcons name="account-circle" size={24} color={color} />
            <View>
              <MaterialCommunityIcons
                name="cards-heart"
                size={24}
                color={color}
              />

              {FavouriteCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.count}>{FavouriteCount}</Text>
                </View>
              )}
            </View>
          ),
          tabBarStyle: { backgroundColor: "black" },
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainHome"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="detailed"
      component={MovieDetail}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "red",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: "absolute",
    top: -5,
    left: 20,
  },

  count: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
