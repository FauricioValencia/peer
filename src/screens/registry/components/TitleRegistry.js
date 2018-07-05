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


export default class TitleRegistry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.containerTitulo}>
          <Text style={styles.tituloTexto}>REGISTRO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  containerTitulo: {
    flex: .1,
    textAlign: 'center',
    backgroundColor:'red',
    justifyContent:'center',
    alignItems: 'center',

  },
  tituloTexto: {
    color: 'white',
    fontSize: 20,
    marginTop:20
  },
});
