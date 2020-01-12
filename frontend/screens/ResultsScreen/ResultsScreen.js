import React from 'react';
import {
  // ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './Styles';
import ScoreDisplay from '../../components/ScoreDisplay/ScoreDisplay';

export default function ResultsScreen() {
    let score = 56; // sample number
    let sampleText = getText();
    return (
        <View>
            <View style={styles.resultsHeader}>
                <Text style={styles.resultsHeaderTitle}>Product Analysis</Text>
                <ScoreDisplay />
            </View>
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

