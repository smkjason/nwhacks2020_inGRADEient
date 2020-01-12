import React from 'react'

import { View, Text } from 'react-native';
import styles from "./Styles"

export default ListItemDetail = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>{props.body}</Text>
    </View>
  )
}