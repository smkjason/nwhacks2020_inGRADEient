import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import ScoreDisplay from '../../components/ScoreDisplay/ScoreDisplay';

// sample data
const results = {
    "score": 56,
    "chemicals": ["sulfate", "sodium", "phosphate", "nitrate"]
}

export default class ResultsScreen extends Component {
    render() {
        return (
            <View>
                <View style={styles.resultsHeader}>
                    <Text style={styles.resultsHeaderTitle}>Product Analysis</Text>
                    <ScoreDisplay score={results.score}/>
                </View>
                <Text style={styles.explanation}>This product contains
                    <Text style={styles.explanationNumber}> { results.chemicals.length } </Text>
                    ingredients from our list of harmful chemicals.</Text>
                <Text style={styles.testText}>Chemicals</Text>
            </View>
        );
    }
}

ResultsScreen.navigationOptions = {
    title: 'Results'
}