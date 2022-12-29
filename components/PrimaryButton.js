import React from 'react';
import {Pressable, StyleSheet, Text} from "react-native";

const PrimaryButton = ({buttonText, onPress, disabled}) => {
  return (
    <Pressable disabled={disabled} style={disabled ? [styles.buttonContainer, styles.disabledButton] : styles.buttonContainer} onPress={onPress}>
      <Text style={disabled ? [styles.buttonText, {color: "#D4D4D4"}]:styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#FFC612",
    paddingVertical: 17,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
  },
  disabledButton: {
    backgroundColor: "#fde7a4"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  }
})