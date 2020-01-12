import React from 'react';
import {
  // ScrollView,
  // StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  let sampleText = getText();
  return (
    <View>
      <Text>{ sampleText }</Text>
    </View>
  );
}

// sample function
function getText() {
  return "Hello World!";
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
*/