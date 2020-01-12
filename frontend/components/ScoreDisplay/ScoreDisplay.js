import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

export default class ScoreDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let score = this.props.score;
        let level = 'moderate';

        return (
            <View style={styles.component}>
                <View style={styles.score}>
                    <Text style={styles.scoreText}>{ score }</Text>
                </View>
                <Text style={styles.level}>{ level }</Text>
            </View>
        );
    }
}
