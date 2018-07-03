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
  ScrollView
} from 'react-native';
import { NavigationActions } from 'react-navigation'
let props2

export default class Splash extends Component {
  constructor(props) {
    super(props);
    props2 = props

    this.state = {

    }
  }
  componentDidMount() {
    setTimeout(() => {
      // Actions.menu()
      resetNavigation('First')

    }, 1000)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fondoLogo}>
          <Text>LOGO</Text>
        </View>
  {/* <View style={{width:'100%', height:15, backgroundColor:'white',marginTop}}></View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7610',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fondoLogo: {
    backgroundColor: '#ffa015',
    height: '55%',
    width: '80%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const resetNavigation = (targetRoute, params) => {

  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: targetRoute,
        params: params
      }),
    ],
  });
  props2.navigation.dispatch(resetAction);
}
