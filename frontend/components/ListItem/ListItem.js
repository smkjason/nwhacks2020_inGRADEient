import React from 'react'
import {formatLabelName} from '../../Util';

import { View, Text } from 'react-native';
import styles from "./Styles"

export default ListItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{formatLabelName(props.title)}</Text>
    </View>
  )
}