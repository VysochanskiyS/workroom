import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, Pressable, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileImagePicker = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
      <Pressable onPress={pickImage} style={{position: "relative"}}>
        <Image source={image ? {uri: image}: require('../../assets/Photo.png')} style={styles.imagePicker}/>
        <Image source={require("../../assets/Edit.png")} style={styles.editIcon}/>
      </Pressable>
    </View>
  );
}

export default ProfileImagePicker;

const styles = StyleSheet.create({
  imagePicker: {
    borderRadius: 100,
    width: 70,
    height: 70
  },
  editIcon: {
    height: 24,
    width: 24,
    bottom: 25,
    left: 45
  }
})
