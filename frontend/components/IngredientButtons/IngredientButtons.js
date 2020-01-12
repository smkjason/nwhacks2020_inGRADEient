import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import { formatLabelName } from '../../Util';

export default class IngredientButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let buttons = [];
        const labels = this.props.labels;
        const styleList = [styles.ingredientButton];
        if (this.props.type === 'bad') {
            styleList.push(styles.badIngredientButton);
        }
        for (let i = 0; i < labels.length; i++) {
            buttons.push(
                <View style={styleList}>
                    <Text style={styles.ingredientButtonText}>{ formatLabelName(labels[i]) }</Text>
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
