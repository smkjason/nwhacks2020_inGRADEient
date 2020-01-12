import React, { Component } from "react";
import {
  Text,
  View,
  AsyncStorage,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import styles from "./Styles";

import Card from "../../components/Card/Card";
import ListItem from "../../components/ListItem/ListItem";

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [], //keys are ... 0, 1, 2, 3, ...
      history: [] //this would be the object that comes with the key... we dont know yet.
    };
  }
  _retrieveData = async () => {
    try {
      this.state.keys = await AsyncStorage.getAllKeys();
      this.state.history = await AsyncStorage.multiGet(keys);

      console.log(this.state.history);
    } catch (error) {
      console.error("I caught an error while retrieving history: " + error);
    }
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onProductTouched(item)}>
        <ListItem title={"Product " + item} />
      </TouchableOpacity>
    );
  };

  onProductTouched = product => {
    console.log("This item is touched.");
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.keys}
          renderItem={this.renderItem}
          extraData={this.state.chosenForDetail}
        />
      </SafeAreaView>
    );
  }
}

HistoryScreen.navigationOptions = {
  title: "History"
};
