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


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.texto}>Login</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .3,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width:'70%',
    height:'60%',
    borderRadius:10,
    borderWidth:2,
    borderColor:'white',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#191819',
    marginTop: 20,
    marginBottom:20
  },
  texto:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }

});
