import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TakeCMND from '../screens/TakeCMND';
import TakeSelf from '../screens/TakeSelf';
import ClientInfor from '../screens/ClientInfo';


const tabNavigator = createStackNavigator({
  Home:HomeScreen,
  Info:ClientInfor,
  CMND:TakeCMND,
  Self:TakeSelf
});

export default tabNavigator;
