/* eslint react/prop-types: 0 */
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // 6.2.2
import { TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.3

import Colors from '../constants/Colors';
import CONSTANTS from '../constants';
import TodosScreen from '../screens/TodosScreen';

// todos data to be shared between all screens
const data = [];

const commonNavigationOptions = ({ navigation }) => ({
  header: null,
  title: navigation.state.routeName,
});

const routeOptions = {
  screen: TodosScreen,
  navigationOptions: commonNavigationOptions,
};

const TabNav = TabNavigator(
  {
    [CONSTANTS.ALL]: routeOptions,
    [CONSTANTS.ACTIVE]: routeOptions,
    [CONSTANTS.COMPLETED]: routeOptions,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case CONSTANTS.ALL:
            iconName = 'format-list-bulleted';
            break;
          case CONSTANTS.ACTIVE:
            iconName = 'filter-center-focus';
            break;
          case CONSTANTS.COMPLETED:
            iconName = 'playlist-add-check';
        }
        return (
          <MaterialIcons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  },
);

const TabNavExport = () => <TabNav screenProps={{ todos: { data } }} />;

export default TabNavExport;
