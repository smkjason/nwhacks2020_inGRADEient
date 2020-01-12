import React from 'react';
import {
  // ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './Styles';

export default function ResultsScreen() {
  let sampleText = getText();
  return (
    <View>
      <Text style={styles.testText}>{ sampleText }</Text>
    </View>
  );
}

// sample function
function getText() {
  return "Results Screen";
}

ResultsScreen.navigationOptions = {
    title: 'Results',
  };

