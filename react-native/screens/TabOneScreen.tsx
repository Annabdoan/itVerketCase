import React from "react";
import { Alert, Button, LogBox, ScrollView, Image } from "react-native";

//import { Text } from "../components/Themed";
import { Text, View } from "../components/Themed";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import Button_image from "../components/Button_image";
import  Button_swipe  from "../components/Button_swipe";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


export const TabOneScreen = ({ navigation }:any) => {
  //const employeeResult = useFetchEmployees();

  /*const gotoDetails = (employee: Employee) => () =>
    navigation.navigate("Modal", { employee });*/

  const image = require("../assets/images/ukens_topp3.png");
  const image2 = require("../assets/images/logo.png")
  const image3 = require("../assets/images/premie.png")

  
  //const gotoScoreboard = () => () => navigation.navigate( "Modal");


  return (
    <>
    
    <Image source={image2} style={{width:420, height:100, backgroundColor:"#ffffff"}}/>
    <Button_image onPress={() => navigation.navigate("Scoreboard")} picture={image}/>

    <Text/>
    <Text/>
    
    <Button_swipe onPress={() => navigation.navigate("Premie")} title={"UKENS PREMIE"}/>
 

    </>
  );

  /*return (
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
  );*/

  
};
