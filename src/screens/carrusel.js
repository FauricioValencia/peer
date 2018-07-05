import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';
import Carousel from 'react-native-carousel-view';

export default class Example extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.container}>
          <Carousel
            width={300}
            height={300}
            delay={9000}
            indicatorColor='#ff7610'

          // onScroll={() => console.log('on scroll view')}
          // onScrollBegin={() => console.log('scroll begin')}
          // onPageChange={(page) => console.log('scroll change', page)}
          >
            <View style={styles.contentContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleTexto}>BIENVENIDO</Text>
              </View>
              <View style={styles.bodyContainer}>
                <Text style={styles.bodyTexto}>
                  ¿Necesitas alguien que te ayude con tus tareas?
              </Text>
              </View>
            </View>

            <View style={styles.contentContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleTexto}>UNA RED DE CONFIANZA</Text>
              </View>
              <View style={styles.bodyContainer}>
                <Text style={styles.bodyTexto}>
                  Donde encontraras a la persona adecuada para la tarea que necesitas
              </Text>
              </View>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleTexto}>TRABJA CUANDO QUIERAS</Text>
              </View>
              <View style={styles.bodyContainer}>
                <Text style={styles.bodyTexto}>
                  Tu decides el horario para trabajar, cuantas horas trabajar
              </Text>
              </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleTexto}>PUBLICA O BUSCA EL SERVICIO QUE DESEES</Text>
              </View>
              <View style={styles.bodyContainer}>
                <Text style={styles.bodyTexto}>
                  No tomamos ninguna comision!
              </Text>
              </View>
            <View style={styles.contentContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleTexto}>¡SUBE DE NIVEL!</Text>
              </View>
              <View style={styles.bodyContainer}>
                <Text style={styles.bodyTexto}>
            TEXTO QUE ATRAPE AL USUARIO
              </Text>
              </View>
            </View>
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191819',

  },
  contentContainer: {
    // borderWidth: 2,
    // borderColor: '#CCC',
    flex: 1,
  },
  titleContainer: {
    backgroundColor: '#191819',
    flex: .3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTexto: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyContainer: {
    flex: .5,
    backgroundColor: '#191819',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyTexto: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white'
  }


});