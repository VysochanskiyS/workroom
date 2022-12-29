import React, {useEffect, useState} from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import Title from "../components/Title";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import {SelectList} from "react-native-dropdown-select-list";
import Code from "../components/SignUpPage/Code";
import * as SQLite from 'expo-sqlite'
import {Formik} from "formik";
import {createTable, readData, writeData} from "../utils/dbMethods";
import {phoneCodes} from "../utils/mockedData";
import {SignupSchema} from "../utils/schemas";

const db = SQLite.openDatabase("database.db")

const SignUpScreen = ({navigation, setCurrentUser}) => {
  const [selected, setSelected] = useState("");


  //createDB
  useEffect(() => {
    createTable()
  }, [])

  const signUpHandler = (data) => {
    const fullNumber = selected + data.phoneNumber;
    writeData(data, fullNumber);
    readData(data.email, data.password, navigation, setCurrentUser);
  }


  const navigateHandler = () => {
    navigation.navigate("Log In")
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Title titleText="Sign Up to Workroom"/>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => signUpHandler(values)}
        >
          {({values, handleChange, errors,touched,handleSubmit,setFieldTouched, isValid}) => (
            <>
            <View style={styles.numberInputsContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.numberInputs}>
                <SelectList
                  defaultOption={phoneCodes[0]}
                  setSelected={(val) => setSelected(val)}
                  data={phoneCodes}
                  boxStyles={styles.dropDownBox}
                  inputStyles={styles.dropDownInput}
                  dropdownStyles={styles.dropDown}
                  dropdownTextStyles={styles.dropDownText}
                  save="value"
                  search={false}
                />
                <TextInput maxLength={9} value={values.phoneNumber} onChangeText={handleChange("phoneNumber")} style={styles.numberInput} onBlur={()=> setFieldTouched("phoneNumber")} keyboardType="number-pad" placeholder="345-67-89"/>
              </View>
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={[styles.errorText, {textAlign: "center"}]}>{errors.phoneNumber}</Text>
              )}
            </View>
            <Code />
            <View style={styles.inputsContainer}>
              <Input placeholder="Enter Your Name" label="Your Name" value={values.name} onChange={handleChange("name")} onBlur={()=>setFieldTouched("name")}/>
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              <Input placeholder="Enter Your Email" label="Your Email" value={values.email} onChange={handleChange("email")} onBlur={()=>setFieldTouched("email")}/>
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Input placeholder="Password" label="Password" password value={values.password} onChange={handleChange("password")} onBlur={()=>setFieldTouched("password")}/>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Input placeholder="Confirm Password" label="Confirm Password" password value={values.confirmPassword} onChange={handleChange("confirmPassword")} onBlur={()=>setFieldTouched("confirmPassword")}/>
              {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>
            <PrimaryButton buttonText="Next" onPress={handleSubmit} disabled={!values.confirmPassword || !isValid}/>
            </>
            )}
            </Formik>
            <View style={styles.loginContainer}>
              <Text style={styles.secondaryText}>Have Account? </Text>
              <Pressable onPress={navigateHandler}>
                <Text style={styles.linkText}>Log In</Text>
              </Pressable>
            </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 70
  },
  numberInputsContainer: {
    marginTop: 50
  },
  label: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "#9795A4"
  },
  numberInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: 15
  },
  dropDownBox: {
    borderColor: "#D7D7D7",
    height: 49,
    borderRadius: 20,
  },
  dropDownInput: {
    color: "#9795A4",
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    backgroundColor: "#FFFFFF",
    opacity: 1
  },
  dropDown: {
    borderColor: "#D7D7D7",
    backgroundColor: "#FFFFFF",
    zIndex: 1,
    width: 100,
    top: 40,
    position: "absolute"
  },
  dropDownText: {
    color: "#9795A4",
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
  },
  numberInput: {
    width: "70%",
    height: 50,
    padding: 12,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#D7D7D7",
    borderRadius: 20
  },
  inputsContainer: {
    marginBottom: 50
  },
  loginContainer: {
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
  },
  errorText: {
    color: "#ce6060"
  }
})