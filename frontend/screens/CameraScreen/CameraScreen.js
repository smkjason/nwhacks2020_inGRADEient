import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { Camera } from "expo-camera";
import { NavigationEvents } from "react-navigation";

import styles from "./CameraStyles";
import Toolbar from "./ToolbarCamera";

export default function CameraPage() {
  const [hasPermission, setHasPermission] = useState(false);
  const [key, setKey] = useState(0);
  const [captures, setCaptures] = useState([]);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    console.log("useEffect is being called");
  }, []);

  const handleShortCapture = async () => {
    console.log("I am now handling short capture.");
    const photoData = await this.camera.takePictureAsync();
    setCaptures([photoData, ...captures]);
    try {
      await AsyncStorage.setItem(key.toString(), photoData.toString());
    } catch (error) {
      console.log("There was an AsyncStorage error: " + error);
    }
    console.log("The key used to store picture: " + key);
    console.log(photoData);
    setKey(key + 1);
  };

  const handleFlashMode = flashMode => {
    console.log("Changed Flash");
    setFlashMode(flashMode);
  };
  const handleCameraType = cameraType => {
    console.log("Flipped Camera");
    setCameraType(cameraType);
  };

  if (hasPermission === false || hasPermission === null) {
    return (
      <View>
        <Text>Hello?</Text>
      </View>
    );
  }

  if (loaded === false) {
    return (
      <NavigationEvents
        onWillFocus={payload => {
          //console.log("will focus", payload);
          setLoaded(true);
        }}
        onDidBlur={payload => {
          //console.log('did leave',payload)
          setLoaded(false);
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        flashMode={flashMode}
        type={cameraType}
        ref={ref => (this.camera = ref)}
      >
        <NavigationEvents
          onWillFocus={payload => setLoaded(true)}
          onDidBlur={payload => setLoaded(false)}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center"
            }}
          ></TouchableOpacity>
        </View>
      </Camera>
      <Toolbar
        onShortCapture={handleShortCapture}
        setFlash={handleFlashMode}
        setCamera={handleCameraType}
        flashMode={flashMode}
        cameraType={cameraType}
      />
    </View>
  );
}
