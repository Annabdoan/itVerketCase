import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Platform, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export const FrontScreen = ({
  navigation,
  /*route: {
    params: { employee },
  },*/
}: RootStackScreenProps<"Premie">) => {
  const goBack = () => navigation.goBack();

  const image = require("../assets/images/premie.png")

  return (
    <Image source={image} style={{width:420, height:300}}/> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
