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


export default class Titulo extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.texto}>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:.2,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems: 'center',
  },
  texto:{
    fontSize:30,
    fontWeight: 'bold',
    color:'white',
    marginTop: 20,
    marginBottom:20
  }
});
