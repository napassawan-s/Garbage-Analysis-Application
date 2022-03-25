import React, { useMemo } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions } from 'react-native';
import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons';
import { MediaType } from 'expo-media-library';
import { SaveType } from 'expo-images-picker/src/Types';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SelectPhotos = ({ navigation }) => {
    const ForceInset = {
        top: 'never',
        bottom: 'never',
      };

  const onSuccess = (data) => {
    Alert.alert('Done',data.length + ' Images selected')
    navigation.navigate('ShowSelected', {
        photos: data
    });
  };

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: 'black',
      errorMessages: {
        hasErrorWithPermissions: 'Please Allow media gallery permissions.',
        hasErrorWithLoading: 'There was an error while loading images.',
        hasErrorWithResizing: 'There was an error while loading images.',
        hasNoAssets: 'No images found.',
      },
    }),
    []
  );

  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: true, 
      initialLoad: 100,
      assetsType: [MediaType.photo],
      minSelection: 1,
      maxSelection: 10,
      portraitCols: 3,
      landscapeCols: 3,
    }),
    []
  );

  const widgetResize = useMemo(
    () => ({
      compress: 0.7,
      base64: false,
      saveTo: SaveType.JPG,
    }),
    []
  );

  const _textStyle = {
    color: 'black',
  };

  const _buttonStyle = {
    backgroundColor: 'white',
    borderRadius: 5,
  };

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: 'Done',
        back: 'Back',
        selected: 'Selected',
      },
      midTextColor: 'black',
      minSelection: 1,
      buttonTextStyle: _textStyle,
      buttonStyle: _buttonStyle,
      onBack: () => {navigation.navigate('Home')},
      onSuccess: (e) => onSuccess(e),
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: 'white',
      spinnerColor: 'blue',
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: 'ios-videocam',
        color: 'tomato',
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: 'ios-checkmark-circle-outline',
        color: 'white',
        bg: '#0eb14970',
        size: 26,
      },
    }),
    []
  );

  return (
    <SafeAreaProvider style ={styles.container}>
 <View style={styles.selectorContainer}>
          <AssetsSelector
            Settings={widgetSettings}
            Errors={widgetErrors}
            Styles={widgetStyles}
            Navigator={widgetNavigator}
            Resize={widgetResize} 
          />
        </View>
    </SafeAreaProvider>
       
  );
}

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  selectorContainer: {
    marginTop: height*0.04,  
    flex: 1
  }
});

export default SelectPhotos;