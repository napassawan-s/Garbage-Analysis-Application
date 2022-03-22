import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';

function App() {

  const load = async () => {
    //Font loading
    await Font.loadAsync({
      MontserratThin: require('./assets/fonts/Montserrat-Thin.ttf'),
      MontserratExtraLight: require('./assets/fonts/Montserrat-ExtraLight.ttf'),
      MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
      MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
      MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
      MontserratExtraBold: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
      MontserratBlack: require('./assets/fonts/Montserrat-Black.ttf')
    });
  }
  return (
    <Home />
  );
}

export default App;