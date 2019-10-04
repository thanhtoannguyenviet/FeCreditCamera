import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import KetQua from '../screens/KetQua';
import HomeScreen from '../screens/HomeScreen';
import TakeCMND from '../screens/TakeCMND';
import TakeSelf from '../screens/TakeSelf';
import ClientInfor from '../screens/ClientInfo';
const tabNavigator = createStackNavigator({
  Home:HomeScreen,
  Info:ClientInfor,
  CMND:TakeCMND,
  Self:TakeSelf,
  Result:KetQua
});

export default tabNavigator;
