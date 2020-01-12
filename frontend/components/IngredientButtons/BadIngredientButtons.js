import React, {Component} from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import styles from './Styles';

export default class BadIngredientButtons extends Component {
    constructor(props) {
        super(props);
    }

    onPressLabel(label) {
        const description = this.props.ingredients[label]["desc"];
        Alert.alert(description);
    }

    render() {
        let buttons = [];
        const labels = Object.keys(this.props.ingredients);
        for (let i = 0; i < labels.length; i++) {
            const label = labels[i];
            buttons.push(
                <TouchableHighlight
                    onPress={() => this.onPressLabel(label)}
                    style={styles.ingredientButton}
                >
                    <Text style={styles.ingredientButtonText}>{ label }</Text>
                </TouchableHighlight>
            );
        }
        return (
            <View style={styles.container}>
                { buttons }
            </View>
        );
    }
}
