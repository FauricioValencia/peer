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


export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:'',
      pass:''
    }

  }


  render() {
    return (
      <View style={styles.container}>
      <TextInput
          style={styles.inputs}
          onChangeText={(user) => this.setState({ user })}
          value={this.state.pass}
          placeholder="Usuario"
          placeholderTextColor='gray'
          secureTextEntry={true}
          selectionColor='black'
        />
        <TextInput
          style={styles.inputs}
          onChangeText={(pass) => this.setState({ pass })}
          value={this.state.pass}
          placeholder="Contraseña"
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
    flex:.6,
    // backgroundColor:'blue',
    justifyContent:'center',
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
