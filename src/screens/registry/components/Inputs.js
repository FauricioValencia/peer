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


export default class Inputs extends Component {
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
        <TextInput
          style={styles.inputs}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder="Usuario"
          placeholderTextColor='gray'
          keyboardType="email-address"
          selectionColor='black'
        />
        <TextInput
          style={styles.inputs}
          onChangeText={(pass) => this.setState({ pass })}
          value={this.state.pass}
          placeholder="Correo"
          placeholderTextColor='gray'
          secureTextEntry={true}
          selectionColor='black'
        />
        <TextInput
          style={styles.inputs}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder="Contraseña"
          placeholderTextColor='gray'
          keyboardType="email-address"
          selectionColor='black'
        />
        <TextInput
          style={styles.inputs}
          onChangeText={(pass) => this.setState({ pass })}
          value={this.state.pass}
          placeholder="Repetir contraseña"
          placeholderTextColor='gray'
          secureTextEntry={true}
          selectionColor='black'
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: .7,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  inputs:{
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    width: '80%',
    marginTop: 15,
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 15,
  }
});
