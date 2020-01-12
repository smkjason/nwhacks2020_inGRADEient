import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import ScoreDisplay from '../../components/ScoreDisplay/ScoreDisplay';

export default function ResultsScreen() {
    let score = 56; // sample number
    let sampleText = getText();
    let chemCount = 5;
    return (
        <View>
            <View style={styles.resultsHeader}>
                <Text style={styles.resultsHeaderTitle}>Product Analysis</Text>
                <ScoreDisplay />
            </View>
            <Text style={styles.explanation}>This product contains
                <Text style={styles.explanationNumber}> { chemCount } </Text>
                ingredients from our list of harmful chemicals.</Text>
            <Text style={styles.testText}>Chemicals</Text>
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

