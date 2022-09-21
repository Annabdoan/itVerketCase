import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Platform, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export const SwipeScreen = ({
  navigation,
  /*route: {
    params: { employee },
  },*/
}: RootStackScreenProps<"Swipe_screen">) => {
  const goBack = () => navigation.goBack();

  const image = require("../assets/images/profil.png")

  return (
    <Image source={image} style={{width:420, height:700}}/> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
