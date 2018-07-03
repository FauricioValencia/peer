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
        <View style={styles.containerTitulo}>
          <Text style={styles.tituloTexto}>REGISTRO</Text>
        </View>
        <View style={styles.camposRegistro}>
          <View style={{ flex: 1, flexDirection: 'row',}}>
            <Icon name="md-person" size={25} color="orange" style={{marginTop:'3%'}} />
            <TextInput
              style={styles.input}
              onChangeText={(user) => this.setState({ user })}
              value={this.state.user}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
          <Icon name="md-mail" size={25} color="orange" style={{marginTop:'3%'}} />
          <TextInput
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          ></TextInput>
          </View>
          <View style={{ flex: 1, flexDirection: 'row'  }}>
            <Icon name="md-lock" size={25} color="orange" style={{marginTop:'3%'}} />
            <TextInput
              style={styles.input}
              onChangeText={(user) => this.setState({ user })}
              value={this.state.user}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
          <Icon name="md-lock" size={25} color="orange" style={{marginTop:'3%'}} />
          <TextInput
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          ></TextInput>
          </View>
        </View>
        <View style={styles.containerBoton}>
        <TouchableOpacity style={styles.button}
          onPress={
            ()=>console.warn("hello bitches")
          }
          >
          <Text style={{color:'white'}}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    backgroundColor: 'gray',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  containerTitulo: {
    flex: .1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tituloTexto: {
    color: 'white',
    fontSize: 20
  },
  camposRegistro: {
    flex: .7,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 2,
    alignItems: 'flex-end',
    flex: 1
  },
  containerBoton: {
    flex: .2,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    backgroundColor:'black',
    width:'60%',
    height:'40%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    borderColor:'white',
    borderWidth:2
  },
});
