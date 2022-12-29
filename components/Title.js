import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import PrimaryButton from "./PrimaryButton";

const Title = ({titleText}) => {
  return (
    <View style={styles.rootContainer}>
      <Image source={require("../assets/Logo.png")} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{titleText}</Text>
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center"
  },
  titleContainer: {
    marginTop: 100,
    marginBottom: 10
  },
  title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 24
  }
})