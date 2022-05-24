import { View, StyleSheet, Alert, Text } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";

import PrimaryButton from "../components/PrimaryButton";
import InputField from "../components/InputField";
import Colors from "../constants/colors";

const StartGameScreen = ({onPickNumber}) => {
  const [TextVal, setTextVal] = useState("");

  const confirmInputHandler = () => {
      const IntVal = parseInt(TextVal)
      if (isNaN(IntVal) || IntVal <=0 || IntVal >=100)
        {Alert.alert(
            'Error',
            'Not a valid number.\nNumber has to be between 1 and 99',
            [
              {
                text: 'Ok',
                onPress: () => setTextVal(""),
              },
            ],
            { cancelable: false }
          );}
      else{
        onPickNumber(IntVal)
      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Guess the Number!</Text>
        <InputField
          placeholder="Please enter a number (1-99)"
          value={TextVal}
          setValue={setTextVal}
          max={2}
          type="number-pad"
        />
        <View style={styles.butsContainer}>
          <View style={styles.butContainer}>
            <PrimaryButton
              color="white"
              bgcolor= {Colors.secondary}
              onPress={()=>confirmInputHandler()}
            >
              Confirm
            </PrimaryButton>
          </View>
          <View style={styles.butContainer}>
            <PrimaryButton
              color="white"
              bgcolor={Colors.alert}
              onPress={() => {
                setTextVal("");
              }}
            >
              Reset
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 30,
  },
  inputContainer: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,

    /*android*/
    elevation: 8,

    /*ios*/
    shadowColor: "black",
    shadowOffset: { width: 3, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.6,
  },
  title:{
    textAlign:"center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10
  },
  butsContainer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  butContainer: {
    flex: 1,
  },
});
