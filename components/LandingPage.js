import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const LandingPage = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Text style={styles.text}>Paths for All</Text>
      </View>
      <Image style={styles.img} source={{uri: 'https://www.lifeline.ca/wp-content/uploads/2018/08/Exercises-for-Seniors-1-Single-Limb-Stance.jpg'}}/>
      <TouchableOpacity style={styles.start}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  header: {
    height: 100,
    padding: 15,
    backgroundColor: 'darkslateblue',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center'
  },
  text: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'center',
      justifyContent: 'center'
  },
  start: {
    backgroundColor: 'darkslateblue',
    marginTop: 200,
    marginLeft: 130,
    marginRight: 130,
    alignItems: 'center',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  img: {
    height: 200,
    marginTop: 100,
    marginLeft: 105,
    marginRight: 30,
    width: 200,
    borderColor: 'darkslateblue',
    borderWidth: 2

  }
});

export default LandingPage;