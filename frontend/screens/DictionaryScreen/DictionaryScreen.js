import React, {Component} from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import DATA from "../../assets/dictionary/sample_data.json";
import styles from "./Styles";
import ListItem from "../../components/ListItem/ListItem"
import ListItemDetail from '../../components/ListItemDetail/ListItemDetail';
import SearchBar from '../../components/SearchBar/SearchBar';

const transformObjectToList = object => Object.keys(object).map((key) => ({
  key,
  ...object[key]
}))

export default class DictionaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      data: [],
      selectedData: [],
      chosenForDetail: ""
    }
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      data: transformObjectToList(DATA)
    }))
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.onIngredientTouched(item.key)}>
        <ListItem
          title={item.key}
        />
        {
          this.state.chosenForDetail === item.key &&
          <ListItemDetail
            body={item.desc}
          />
        }
      </TouchableOpacity>
    )
  }

  onIngredientTouched = (ingredient) => {
    this.setState(prevState => ({
      ...prevState,
      chosenForDetail: ingredient
    }))
  }

  searchBarTextChangeHandler = (text) => {
    this.setState(prevState => {
      let newState = {
        ...prevState,
        chosenForDetail: "",
        isSearching: false,
        selectedData: []
      };

      if (text !== "") {
        newState.isSearching = true;
        newState.selectedData = prevState.data.filter(element => 
          element.key.startsWith(text.toLowerCase())
        )
      }

      return newState;
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.searchBarContainer}>
        <SearchBar 
          style={styles.searchBarContainer}
          onSearchBarTextChange={this.searchBarTextChangeHandler}
        />
        <FlatList
          style={styles.listContainer}
          data={this.state.isSearching ? this.state.selectedData : this.state.data}
          renderItem={this.renderItem}
          extraData={this.state.chosenForDetail}
        />
      </SafeAreaView>
    )
   }
}

DictionaryScreen.navigationOptions = {
  title: 'Dictionary',
};
