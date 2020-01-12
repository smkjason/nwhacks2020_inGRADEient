import React from "react";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

import styles from "./CameraStyles";

export default ({
  capturing = false,
  cameraType = Camera.Constants.Type.back,
  flashMode = Camera.Constants.FlashMode.off,
  setFlash,
  setCamera,
  onCaptureIn,
  onCaptureOut,
  onLongCapture,
  onShortCapture
}) => (
  <Grid style={styles.bottomToolbar}>
    <Row>
      <Col style={styles.alignCenter}>
        <TouchableOpacity
          onPress={() => {
            console.log("Changing flash state...");
            flashMode === Camera.Constants.FlashMode.on
              ? setFlash(Camera.Constants.FlashMode.off)
              : setFlash(Camera.Constants.FlashMode.on);
          }}
        >
          <Ionicons
            name={
              flashMode == Camera.Constants.FlashMode.on
                ? "md-flash"
                : "md-flash-off"
            }
            color="white"
            size={30}
          />
        </TouchableOpacity>
      </Col>
      <Col size={2} style={styles.alignCenter}>
        <TouchableWithoutFeedback
          //   onPressIn={onCaptureIn}
          //   onPressOut={onCaptureOut}
          //   onLongPress={onLongCapture}
          onPress={onShortCapture}
        >
          <View
            style={[styles.captureBtn, capturing && styles.captureBtnActive]}
          >
            {capturing && <View style={styles.captureBtnInternal} />}
          </View>
        </TouchableWithoutFeedback>
      </Col>
      <Col style={styles.alignCenter}>
        <TouchableOpacity
          onPress={() => {
            console.log("Flipping camera...");
            cameraType === Camera.Constants.Type.back
              ? setCamera(Camera.Constants.Type.front)
              : setCamera(Camera.Constants.Type.back);
          }}
        >
          <Ionicons name="md-reverse-camera" color="white" size={30} />
        </TouchableOpacity>
      </Col>
    </Row>
  </Grid>
);
