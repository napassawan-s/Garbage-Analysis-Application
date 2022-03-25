import React, { useMemo } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions, TouchableOpacity, Image, Button } from 'react-native';

let height = Dimensions.get('screen').width * 0.32
let margin = Dimensions.get('screen').width * 0.0065

const ShowSelected = ({ route, navigation }) => {
    const callCropPhoto = (photo) => {
        navigation.navigate('Crop', {photo: photo})
    };
    
    let photos = route.params.photos;
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                {
                    photos.map((photo, index) => {
                        return (
                            <Image
                                key={index}
                                source={{ uri: photo['uri'] }}
                                style={styles.img} />
                        )
                    })
                }
            </View>
            <View>
                <Button
                    title="Crop"
                    onPress={() => 
                        {
                            Alert.alert(photos[0])
                            //callCropPhoto(photos[0]['uri'])
                            navigation.navigate('Crop', {photo: photos[0]['uri']})
                        }}
                ></Button>
                <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '100%'
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
        width: 300,
        height: 40,
        borderRadius: 10,
        lineHeight: 40,
        textAlign: 'center',
        overflow: 'hidden',
        marginBottom: 50,
        alignSelf: 'center'
    },
    img: {
        width: '32%',
        height: height,
        margin: margin,
    },
    listContainer: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        marginTop: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    }
});

export default ShowSelected;