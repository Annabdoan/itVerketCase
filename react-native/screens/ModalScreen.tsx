import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Platform, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export const ModalScreen = ({
  navigation,
  /*route: {
    params: { employee },
  },*/
}: RootStackScreenProps<"Modal">) => {
  const goBack = () => navigation.goBack();

  const image = require("../assets/images/scoreboard_full.png")

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
