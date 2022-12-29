import React, {useEffect, useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Input from "../components/Input";

import * as SQLite from 'expo-sqlite'
import {readData} from "../utils/dbMethods";

const db = SQLite.openDatabase("database.db")
const LogInScreen = ({navigation, setCurrentUser}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = () => {
    readData(email, password, navigation, setCurrentUser);
  }

  const navigateHandler = () => {
    navigation.navigate('Sign Up')
  }
  return (
    <View style={styles.container}>
      <Title titleText="Log In to Workroom"/>
      <View style={styles.inputsContainer}>
        <Input value={email} onChange={setEmail} label="Your Email" placeholder="Enter your email"/>
        <Input value={password} onChange={setPassword} label="Password" placeholder="Enter your password" password={true}/>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>
      <PrimaryButton buttonText="Log In" onPress={loginHandler}/>
      <View style={styles.createAccountContainer}>
        <Text style={styles.secondaryText}>New User? </Text>
        <Pressable onPress={navigateHandler}>
          <Text style={styles.linkText}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30
  },
  inputsContainer: {
    marginBottom: 50
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#9795A4",
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    marginTop: 20
  },
  createAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35
  },
  secondaryText: {
    color: "#9795A4",
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
  },
  linkText: {
    color: "#FFC612",
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
  }
})