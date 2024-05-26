import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./App/Screens/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { FavouritesProvider } from "./App/context/FavouritesContext";

export default function App() {
  return (
    <View style={styles.container}>
      <FavouritesProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
      </FavouritesProvider>

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
