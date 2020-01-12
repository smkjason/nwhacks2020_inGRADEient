import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

export default class HistoryScreen extends Component {
    render() {
        return (
            <View>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

HistoryScreen.navigationOptions = {
    title: 'History'
}