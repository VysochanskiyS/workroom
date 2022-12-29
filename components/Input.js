import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";

const Input = ({label, placeholder, password, value, onChange, defaultValue, keyboardType, onBlur}) => {
  const [showPassword, setShowPassword] = useState(password ? password : false)

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput defaultValue={defaultValue} value={value} keyboardType={keyboardType} onChangeText={onChange} onBlur={onBlur} autoCapitalize={'none'} secureTextEntry={showPassword} placeholder={placeholder} style={styles.input}/>
        {password &&
          <Pressable onPress={showPasswordHandler} style={styles.showPasswordButton}>
            <Image style={{width: 24, height:24}} source={showPassword ? require("../assets/Eye.png"): require("../assets/Eye_closed.png")}/>
          </Pressable>
        }
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 40
  },
  label: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#9795A4"
  },
  inputContainer: {
    position: "relative"
  },
  input: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D7D7D7"
  },
  showPasswordButton: {
    position: "absolute",
    top: 15,
    right: 0,
  }
})