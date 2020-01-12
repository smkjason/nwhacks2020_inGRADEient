import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import ScoreDisplay from '../../components/ScoreDisplay/ScoreDisplay';
import IngredientButtons from '../../components/IngredientButtons/IngredientButtons';

// sample data
const results = {
    "score": 1,
    "ingredients": {
        "good": [
            "water",
            "gooding1",
            "gooding2"
        ],
        "bad": {
            "sodium_sulfate": {
                "desc": "asdf"
            },
            "bading1": {
                "desc": "asdfasdf"
            },
            "bading2": {
                "desc": "asdfasdfasdf"
            },
            "bading3": {
                "desc": "asdfasdfasdfdf"
            }, 
        },
        "unknown": [
            "unk1",
            "unknwn2",
            "unknown3",
            "unknownunknown4",
            "unknown5",
        ]
    }
}

export default class ResultsScreen extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.resultsHeader}>
                    <Text style={styles.resultsHeaderTitle}>Product Analysis</Text>
                    <ScoreDisplay score={results.score}/>
                </View>
                <Text style={styles.explanation}>This product contains
                    <Text style={styles.explanationNumber}> { Object.keys(results.ingredients.bad).length } </Text>
                items from our list of bad ingredients.</Text>
                <View style={styles.category}>
                    <Text style={styles.categoryHeader}>Bad Ingredients</Text>
                    <View style={styles.categoryWrapper}>
                    <IngredientButtons type="bad" labels={results.ingredients.bad}/>
                    </View>
                </View>
                <View style={styles.category}>
                    <Text style={styles.categoryHeader}>Okay Ingredients</Text>
                    <IngredientButtons type="good" labels={results.ingredients.good}/>
                </View>
                <View style={styles.category}>
                    <Text style={styles.categoryHeader}>Unknown Ingredients</Text>
                    <View style={styles.categoryWrapper}>
                    <IngredientButtons type="unknown" labels={results.ingredients.unknown}/>
                    </View>
                </View>
            </View>
        );
    }
}

ResultsScreen.navigationOptions = {
    title: 'Results'
}