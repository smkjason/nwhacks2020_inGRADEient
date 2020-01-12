import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

export default class ScoreDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // set levels and score
        let score = this.props.score;
        let percentage = Math.ceil(score / 8 * 100);
        let level = "";
        let levelStyle = [styles.score];
        if (percentage < 25) {
            level = "good";
            levelStyle.push(styles.scoreGood);
        } else if (percentage < 50) {
            level = "moderate";
            levelStyle.push(styles.scoreModerate);
        } else if (percentage < 76) {
            level = "ehhh...";
            levelStyle.push(styles.scoreEhhh);
        } else {
            level = "harmful";
            levelStyle.push(styles.scoreHarmful);
        }

        return (
            <View style={styles.component}>
                <View style={levelStyle}>
                    <Text style={styles.scoreText}>{ percentage }</Text>
                </View>
                <Text style={styles.level}>{ level }</Text>
            </View>
        );
    }
}
