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
  TouchableOpacity
} from 'react-native';
import { resetNavigation } from '../../splash/Splash'
export default class FirstOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fondoBoton}
          onPress={() => resetNavigation('Login')}
        >
          <Text
            style={{ color: 'white' }}
          >Iniciar Sesion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fondoBoton}
          onPress={() => resetNavigation('Registry')}
        >
          <Text
            style={{ color: 'white' }}>Registrate
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .3,
    backgroundColor: '#191819',
  },
  fondoBoton: {
    backgroundColor: '#ff7610',
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2
  }
});
