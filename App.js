import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./App/Screens/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";
// import TabNavigation from "./App/Navigations/TabNavigation";
import AppNavigation from "./App/Navigations/AppNavigation";
import { FavouritesProvider } from "./App/context/FavouritesContext";
import { AllMoviesProvider } from "./App/context/AllMoviesContext";

export default function App() {
  return (
    <View style={styles.container}>
      <AllMoviesProvider>
      <FavouritesProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      </FavouritesProvider>
      </AllMoviesProvider>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#040714",
    // color: "#f9f9f9",
  },
});
