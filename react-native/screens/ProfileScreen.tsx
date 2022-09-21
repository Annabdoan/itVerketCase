import React from "react";
import { Button, ScrollView, Image } from "react-native";

import { Text } from "../components/Themed";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";

export const ProfileScreen = ({ navigation }: RootTabScreenProps<"TabThree">) => {
  const employeeResult = useFetchEmployees();

  const gotoDetails = (employee: Employee) => () =>
    navigation.navigate("Modal", { employee });

    const image = require("../assets/images/tomhenrik.png");

  return (
    <>
    <Image source={image} style={{width:420, height:750, resizeMode:"center", backgroundColor:"#ffffff"}}/> 

    <Button
      title={""}
      onPress={undefined}
      key={undefined}
    />

    </>

  );
};
