import React from "react";
import { Button, ScrollView } from "react-native";

import { Text } from "../components/Themed";
import { Employee, useFetchEmployees } from "../hooks/useFetchEmployees";
import { RootTabScreenProps } from "../types";

export const ProfileScreen = ({ navigation }: RootTabScreenProps<"TabOne">) => {
  const employeeResult = useFetchEmployees();

  const gotoDetails = (employee: Employee) => () =>
    navigation.navigate("Modal", { employee });

  return (
    

    <Button
      title={""}
      onPress={undefined}
      key={undefined}
    />

  );
};
