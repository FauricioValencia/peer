/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FirstSliderComponent from '../components/FirstSliderComponent';
import FirstOptions from '../components/FirstOptions';
import FirstRedesSociales from '../components/FirstRedesSociales';

export default class First extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <FirstSliderComponent />
        <FirstOptions />
        <FirstRedesSociales />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191819',
  },
});
