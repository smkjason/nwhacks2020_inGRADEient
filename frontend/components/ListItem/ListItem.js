import React from 'react'

import { View, Text } from 'react-native';
import styles from "./Styles"

export default ListItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}