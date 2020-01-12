import React, {Component} from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './Styles';
import ScoreDisplay from '../../components/ScoreDisplay/ScoreDisplay';
import IngredientButtons from '../../components/IngredientButtons/IngredientButtons';

// sample data
const results = {
    "bad": [
        "bad1",
        "bad2",
        "bad_three",
    ],
    "rest": [
        "rest1",
        "good",
        "ok_ayyy",
        "rest1",
        "good",
        "ok_ayyy",
        "testingggg"
    ],
}

export default class ResultsScreen extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.resultsHeader}>
                    <Text style={styles.resultsHeaderTitle}>Product Analysis</Text>
                    <ScoreDisplay score={results.bad.length}/>
                </View>
                <Text style={styles.explanation}>This product contains
                    <Text style={styles.explanationNumber}> {results.bad.length} </Text>
                items from our list of bad ingredients.</Text>
                <ScrollView>
                    <View style={styles.category}>
                        <Text style={styles.categoryHeader}>Bad Ingredients</Text>
                        <View style={styles.categoryWrapper}>
                        <IngredientButtons type="bad" labels={results.bad}/>
                        </View>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryHeader}>Other Ingredients</Text>
                        <IngredientButtons type="rest" labels={results.rest}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

ResultsScreen.navigationOptions = {
    title: 'Results'
}