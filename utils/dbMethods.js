import * as SQLite from "expo-sqlite";
import {Alert} from "react-native";

const db = SQLite.openDatabase("database.db")

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql("CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT, number TEXT, position TEXT, skype TEXT)")
  });
};

export const writeData = (data, fullNumber) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Users (name, email, password, number, position, skype) values (?,?,?,?,?,?)",
      [data.name, data.email, data.password, fullNumber, "UI/UX Designer", " "],
    )
  })
}

export const readData = (email, password, navigation, setCurrentUser) => {
  db.transaction( tx => {
    tx.executeSql(
      `SELECT * FROM Users WHERE email="${email}" and password="${password}"`, null,
      (txObj, resultSet) => {
        const user = resultSet.rows.item(0)
        setCurrentUser(resultSet.rows.item(0))
        if(user) {
          navigation.navigate("Edit Profile")
        } else {
          Alert.alert("Error", "Invalid email or password")
        }
      }
    )
  })
}