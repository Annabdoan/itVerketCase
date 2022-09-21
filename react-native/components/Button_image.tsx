import { View, Button, StyleSheet, TouchableOpacity, Image, Text} from "react-native";



const Button_image = ({ onPress, picture }: {onPress: any, picture:any}) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Image
            source = {picture}
            style = {styles.appButtonContainer}
        />
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      width: 420,
      height: 300,
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }

  });


export default Button_image