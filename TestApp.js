import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import SelectPhotos from './pages/SelectPhotos';
import ShowSelected from './pages/ShowSelected';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SelectPhotos" component={SelectPhotos}/>
        <Stack.Screen name="ShowSelected" component={ShowSelected}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;