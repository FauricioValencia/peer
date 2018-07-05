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

import Titulo from './Titulo';
import Inputs from './Inputs'
import Button from './Button';
export default class LoginComponent extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Titulo />
          <Inputs />
          <Button />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffa015',
    width: '90%',
    height: '50%',
    borderRadius:20
  },
});
