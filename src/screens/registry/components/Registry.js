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

//componentes
import TitleRegistry from '../components/TitleRegistry';
import Inputs from '../components/Inputs';
import Button from '../components/Button';


export default class RegistryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      pass: '',
      repass: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          
          <TitleRegistry/>
          <Inputs/>
          <Button/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '75%',
    backgroundColor:'#ffa015',
    borderRadius: 10,
  },
});
