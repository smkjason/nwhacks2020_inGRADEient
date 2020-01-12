import React, {Component} from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import styles from './Styles';
import { formatLabelName } from '../../Util';

export default class IngredientButtons extends Component {
    constructor(props) {
        super(props);
    }

    onPressLabel(labelName) {
        const description = this.props.labels[labelName]["desc"];
        Alert.alert(description);
    }

    render() {
        let buttons = [];
        const type = this.props.type;   // type = good, bad, unknown
        if (type === 'bad') {
            const labels = Object.keys(this.props.labels);
            for (let i = 0; i < labels.length; i++) {
                const labelName = labels[i];
                buttons.push(
                    <TouchableHighlight
                        onPress={() => this.onPressLabel(labelName)}
                        underlayColor={'#ffcccc'}
                        style={[styles.ingredientButton, styles.badIngredientButton]}
                    >
                        <Text style={styles.ingredientButtonText}>{ formatLabelName(labelName) }</Text>
                    </TouchableHighlight>
                );
            }
        } else {
            const labels = this.props.labels;
            const styleList = [styles.ingredientButton];
            if (type === 'good') {
                styleList.push(styles.goodIngredientButton);
            }
            for (let i = 0; i < labels.length; i++) {
                buttons.push(
                    <View style={styleList}>
                        <Text style={styles.ingredientButtonText}>{ formatLabelName(labels[i]) }</Text>
                    </View>
                );
            }
        }
        return (
            <View style={styles.container}>
                { buttons }
            </View>
        );
    }
}
