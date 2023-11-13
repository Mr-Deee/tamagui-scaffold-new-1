import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image, Button } from "react-native";
import { TamaguiProvider,Stack } from "tamagui";
import Modal from 'react-native-modal';
import config from "./tamagui.config";
import {  } from "react-native";
import ImagePicker from 'react-native-image-picker';
// import storage from 'react-native-firebase/storage';
// import database from '@react-native-firebase/database';

export default function App() {

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = () => {
    if (selectedImage === null) {
      // If no image is selected, allow the user to choose one.
      ImagePicker.launchImageLibrary(
        {
          // title: 'Select Image',
          // cancelButtonTitle: 'Cancel',
          // takePhotoButtonTitle: 'Take Photo',
          // chooseFromLibraryButtonTitle: 'Choose from Library',
          mediaType: 'photo',
        },
        (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorMessage) {
            console.log('ImagePicker Error: ', response.errorCode);
          } else {
            const source = { uri: response.assets };
            setSelectedImage(null);
          }
        }
      );
    } else {
      // If an image is already selected, you can handle image upload or any other action.
      // You can display a different UI or prompt the user to upload or change the image.
      // For this example, we'll just clear the selected image.
      setSelectedImage(null);
    }
  };

  
  return (
    <TamaguiProvider config={config}>
  
 <View style={styles.container}>
        {/* <Text style={styles.title}>React Native Image Upload</Text> */}
        {selectedImage && <Image source={selectedImage} style={styles.image} />} {/* Use 'selectedImage' instead of 'image' */}
        <Button title="Pick Image" onPress={selectImage} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleBottomSheet}>
      <View>
        <Text>More Lyrics </Text> </View>
      </TouchableOpacity>
      <Modal
        isVisible={isBottomSheetVisible}
        onBackdropPress={toggleBottomSheet}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={{ backgroundColor: 'black', padding: 16,height:488 }}>
          <Text>Bottom Sheet Content</Text> </View>
          <TouchableOpacity onPress={toggleBottomSheet}>
            
            <Text>Close</Text>
          </TouchableOpacity>
       
      </Modal>
    </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
