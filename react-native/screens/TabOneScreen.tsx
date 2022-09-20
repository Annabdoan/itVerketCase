import React from "react";
import { Alert, Button, LogBox, ScrollView, Image } from "react-native";

//import { Text } from "../components/Themed";
import { Text, View } from "../components/Themed";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";


export const TabOneScreen = ({ navigation }: RootTabScreenProps<"TabOne">) => {
  const employeeResult = useFetchEmployees();

  const gotoDetails = (employee: Employee) => () =>
    navigation.navigate("Modal", { employee });

  const image = require("../assets/images/topp3.png");

  return (
    <>
    <Image source={image} style={{width:420, height:300}}/> 

    <Button
      title={"KNAPP"}
      color="#ff0000"
      onPress={() => Alert.alert("Stay tuned, stay keeg!")}
      key={undefined}
    />

    <Button
      title={"KNAPP2"}
      color="#ff0000"
      onPress={() => Alert.alert("Stay tuned, stay keeg!")}
      key={undefined}
    />  
    </>
  );

  
};
