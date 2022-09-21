import React from "react";
import { Alert, Button, Dimensions, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";
import  Button_swipe  from "../components/Button_swipe";

const IMAGE_WIDTH = Dimensions.get("window").width;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.3;

export const TabTwoScreen = ({ navigation }: RootTabScreenProps<"TabTwo">) => {
  const employeeResult = useFetchEmployees();


  /*const renderEmployee = ({ item }: { item: Employee }) => {
    return (
      <View style={{ flexDirection: "column" }}>
        <Image
          style={styles.image}
          key={item.name}
          source={{ uri: item.image }}
          resizeMode="cover"
        />
        <Text> {item.gender}</Text>
      </View>
    );
  };*/

  //const keyExtractor = (employee: Employee) => employee.name;


  /*const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });*/

  const image = require("../assets/images/scoreboard.png");

  return (
    <>
    
    <Button_swipe onPress={() => Alert.alert("Hello world")} title={"Name"}/>

    <View style={styles.screenContainer}>
      <Button title="Hey there!" />
    </View>

    </>

    // <Image source={image} style={{width:420, height:500}}/> 

    /*<View>
      {employeeResult.error ? (
        <Text style={styles.title}>{employeeResult.error}</Text>
      ) : employeeResult.loading ? (
        <Text style={styles.title}>{"Laster..."}</Text>
      ) : (
        <FlatList
          data={employeeResult.employees}
          horizontal={true}
          renderItem={renderEmployee}
          keyExtractor={keyExtractor}
          snapToInterval={IMAGE_WIDTH}
        />
      )}
    </View>*/
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  }

});
