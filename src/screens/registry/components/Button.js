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


export default class RegistryComponent extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.button}>
          <Text style={styles.texto}>
            REGISTRAR
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent:'center',
    alignItems: 'center',
  },
  button:{
    width:'80%',
    height:'90%',
    backgroundColor:'#191819',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius:10,
    borderWidth:2,
    borderColor:'white'

  },
  texto:{
    color:'white',
  }
});
