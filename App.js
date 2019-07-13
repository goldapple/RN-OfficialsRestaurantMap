import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MapScreen, ListScreen, BoardScreen } from './screens/index';

const TapNavigator = createBottomTabNavigator({
  Map: MapScreen,
  List: ListScreen,
  Board: BoardScreen
}, {
  initialRouteName: 'Map',
  header: null,
  headerMode: 'none'
});

const AppContainer = createAppContainer(TapNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}