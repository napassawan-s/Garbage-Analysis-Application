import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Result from './pages/Result';
import SelectPhotos from './pages/SelectPhotos';
import ShowSelected from './pages/ShowSelected';
import ImgList from './pages/ImgList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

let customFonts = {
  'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
  'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
  'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf')
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SelectPhotos" component={SelectPhotos} />
          <Stack.Screen name="ShowSelected" component={ShowSelected} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="ImgList" component={ImgList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}