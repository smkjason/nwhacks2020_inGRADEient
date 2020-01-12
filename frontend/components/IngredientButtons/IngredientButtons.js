import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

export default class IngredientButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let buttons = [];
        const labels = this.props.labels;
        for (let i = 0; i < labels.length; i++) {
            buttons.push(
                <View style={styles.ingredientButton}>
                    <Text style={styles.ingredientButtonText}>{ labels[i] }</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                { buttons }
            </View>
        );
    }
}
