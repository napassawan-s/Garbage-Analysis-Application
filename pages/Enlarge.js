import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import ImageZoom from 'react-native-image-pan-zoom';

let screenWidth = Dimensions.get('screen').width
let screenHeight = Dimensions.get('screen').height

const Enlarge = ({ route, navigation }) => {
    let uri = route.params.pic;
    
    console.log(Dimensions.get('screen').width+'/'+Dimensions.get('screen').height)
    
    return (
   
            <View  style={styles.container}>
            <ImageZoom cropWidth={screenWidth}
                       cropHeight={screenHeight}
                       imageWidth={screenWidth}
                       imageHeight={screenHeight}
                       maxOverflow={0}>
                <Image
                    source={{ uri: uri }}
                    style={styles.img} />
               
            </ImageZoom>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%', 
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Montserrat-Bold',
    },
    button: {
        color: 'black'
    },
    img: {
        width: screenWidth,
        height:  screenHeight,
        alignSelf: 'center',
        resizeMode: 'contain',
    },

});

export default Enlarge;