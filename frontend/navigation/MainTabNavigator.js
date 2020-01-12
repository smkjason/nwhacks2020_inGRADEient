import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import DictionaryScreen from '../screens/DictionaryScreen/DictionaryScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HistoryStack = createStackNavigator(
  {
    Home: HistoryScreen,
  },
  config
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History', // this is for the nav bar at the bottom
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HistoryStack.path = '';

// ResultsStack.navigationOptions = {
//   tabBarLabel: 'Results', // this is for the nav bar at the bottom
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// ResultsStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: CameraScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const DictionaryStack = createStackNavigator(
  {
    Settings: DictionaryScreen,
  },
  config
);

DictionaryStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

DictionaryStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HistoryStack,
  LinksStack,
  DictionaryStack,
});

tabNavigator.path = '';

export default tabNavigator;
