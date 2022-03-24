import React, { useMemo } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions, TouchableOpacity, Image } from 'react-native';

const ShowSelected = ({ route, navigation }) => {
    let photos = route.params.photos;
    console.log(photos)
    return (
        <View style={styles.container}>
           <View style={styles.listContainer}>
            {
                photos.map((photo, index) => {
                   return(
                  
                    <Image
                        key={index}
                        //source={{ uri: photo['uri'] }}
                        //source={require(uri)}
                        source = { {uri: photo['uri'] } }
                        style={styles.img} />
    
                   )
                   
                })
            }
            </View>
            <View>
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
        alignSelf:'center'
    },
    img: {
        width: 116,
        height: 116,
        margin: 3
    },
    listContainer: { //not centered yet
        flex:1,
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        textAlign: 'center'
    }
});

export default ShowSelected;