import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Result from './pages/Result';
import SelectPhotos from './pages/SelectPhotos';
import ShowSelected from './pages/ShowSelected';
import Crop from './pages/Crop';
import Enlarge from './pages/Enlarge';
import ImgList from './pages/ImgList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';


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
        <Stack.Navigator back={{title: 'Back'}}
          //screenOptions={{
            //headerShown: false
          //}}
        >
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="SelectPhotos" component={SelectPhotos} options={{headerShown: false, title: 'Upload Photos', headerBackTitle: 'back' }} />
          <Stack.Screen name="ShowSelected" component={ShowSelected} options={{title: 'Selected Photos', headerBackTitle: 'back'}} />
          <Stack.Screen name="Crop" component={Crop} options={{title: 'Crop Photo', headerBackTitle: 'back'}} />
          <Stack.Screen name="Result" component={Result} options={{title: 'Result', headerBackTitle: 'back' }} />
          <Stack.Screen name="ImgList" component={ImgList} options={({ route }) => ({ title: route.params.pics['title'], headerBackTitle: 'back'})} />
          <Stack.Screen name="Enlarge" component={Enlarge} options={{title: '', headerBackTitle: 'back' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}