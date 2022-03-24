import React, { useMemo } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions,TouchableOpacity } from 'react-native';

const ShowSelected = ({ route, navigation }) => {
    const { photos } = route.params.photos;

    return (
        <View style={styles.container}>
            <Text>Received {photos} photos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                <Text style={styles.button}>Submit</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 26
    },
    button: {
        margin: 30,
        backgroundColor: '#67E0B4',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17,
        color: 'white',
        width: 200,
        height: 200,
        borderRadius: 200,
        lineHeight: 200,
        textAlign: 'center'
        
    }
  });

export default ShowSelected;