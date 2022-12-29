import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import ProfileImagePicker from "../components/ProfileScreen/ProfileImagePicker";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db")


const ProfileScreen = ({navigation, currentUser}) => {
  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [number, setNumber] = useState(currentUser.number)
  const [skype, setSkype] = useState(currentUser.skype)
  const [position, setPosition] = useState(currentUser.position)


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Edit Profile</Text>
          <Pressable style={styles.headerLink} onPress={() => navigation.navigate("Log In")}>
            <Text style={styles.headerLinkText}>Log Out</Text>
          </Pressable>
        </View>
        <ProfileImagePicker/>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{currentUser.name}</Text>
          <Text style={styles.secondaryText}>{position}</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input defaultValue={currentUser.name} value={name} onChange={setName} placeholder="Your Name" label="Name"/>
          <Input defaultValue={currentUser.email} value={email} onChange={setEmail} placeholder="Your Email" label="Email"/>
          <Input defaultValue={currentUser.number} keyboardType="phone-pad" value={number} onChange={setNumber} placeholder="Your Number" label="Phone"/>
          <Input value={position} onChange={setPosition} placeholder="Your Position" label="Position"/>
          <Input value={skype} onChange={setSkype} placeholder="Skype" label="Skype"/>
        </View>
        <PrimaryButton buttonText="Save"/>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  headerContainer: {
    flexDirection:"row"
  },
  headerText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    flex: 2,
    textAlign: "right",
    marginTop: 10
  },
  headerLink: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  headerLinkText: {
    fontFamily: "Poppins_500Medium",
    color: "#FFC612",
    fontSize: 16
  },
  nameContainer: {
    alignItems: "center"
  },
  name: {
    fontFamily: "Poppins_500Medium",
    fontSize: 24,
  },
  secondaryText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#9795A4"
  },
  inputsContainer: {
    marginBottom: 30
  }
})