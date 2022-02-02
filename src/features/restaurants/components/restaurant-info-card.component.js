import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri: photos[0],
        }}
      />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>Card Content</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  restaurantInfo: {
    flex: 1,
    padding: 20,
  },
  card: {
    margin: 16,
    elevation: 5,
    backgroundColor: "white",
  },
});
