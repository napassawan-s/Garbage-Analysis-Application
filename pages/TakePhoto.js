import  { Camera } from 'expo-camera';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

let imageData = []

const TakePhoto = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);


    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.backbutton}
                onPress={() => {
                    navigation.navigate('Home')
            }}>
                <Text style={styles.text}> Back </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.snapbutton} onPress={ async () => {
                if (camera) {
                    const data = await camera.takePictureAsync({ base64: true });
                    imageData.push(data)
                    navigation.navigate('ShowSelected', { photos: imageData })
                }
            }}>
                <Text style={styles.text}> Snap </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.backbutton}
                onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
            }}>
                <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    marginTop: '12%',
  },
  snapbutton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: '50%',
    marginBottom: '10%'
  },
  backbutton: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: '25%',
  },
  text: {
    fontSize: 18,
    color: 'white',
  }

});

export default TakePhoto;