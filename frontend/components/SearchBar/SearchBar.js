import React from 'react'

import { View, TextInput } from 'react-native';
import styles from "./Styles"

export default SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.body}
        placeholder="search ingredient here"
        onChangeText={text => props.onSearchBarTextChange(text)}
      />
    </View>
  )
}