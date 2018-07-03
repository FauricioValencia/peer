import React from 'react';
import { StackNavigator, } from 'react-navigation'
//rutas
import Login from '../screens/login/container/Login'
import Registry from '../screens/registry/container/Registry';
import Splash from '../screens/splash/Splash';
import First from '../screens/first/container/First'

export const Peer = StackNavigator({

  Splash: {
    screen: Splash,
    navigationOptions: { header: null }
  },
  First: {
    screen: First,
    navigationOptions: { header: null }
  },
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  },
  Registry: {
    screen: Registry,
    navigationOptions: { header: null }
  }

});