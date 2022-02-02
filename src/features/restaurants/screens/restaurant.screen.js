import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { RestaurantInfo } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <RestaurantInfo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    margin: 16,
    flex: 0,
  },
});
