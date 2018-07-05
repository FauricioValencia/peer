/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation'
import Example from '../../carrusel';


let props2;

export default class FirstSliderComponent extends Component {
  constructor(props) {
    super(props);
    props2 = props
  }
  onHandleLogin = () => {
      resetNavigation('Login');
  }
  onHandleRegistry = () => {
      resetNavigation('Registry');
  }
//optimizar el metodo

  render() {
    return (
      <View style={styles.container}>
      <Example/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .9,
    backgroundColor: '#191819',
    justifyContent:'center',
    alignItems:'center',
   
  },
});
