import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

export default function ScoreDisplay() {
    let score = 56; // sample number
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
