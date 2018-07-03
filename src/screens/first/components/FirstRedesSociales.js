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

export default class FirstRedesSociales extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> redes sociales</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .15,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',
  },
});
