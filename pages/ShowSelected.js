import React, { useMemo } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions, TouchableOpacity, Image, Button } from 'react-native';
import APIServices from '../components/APIServices'

let height = Dimensions.get('screen').width * 0.32
let margin = Dimensions.get('screen').width * 0.0065

const ShowSelected = ({ route,props,  navigation }) => {
    let photos = route.params.photos;
    let items = [{
        uniqueId: 'Glass',
        title: 'Glass',
        pic: [{width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}]
    }, {
        uniqueId: 'Metal',
        title: 'Metal',
        pic: [{width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}]
    }, {
        uniqueId: 'Paper',
        title: 'Paper',
        pic: [{width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}]
    }, {
        uniqueId: 'Plastic',
        title: 'Plastic',
        pic: [{width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}]
    },]

    /*uriToBase64 = async (uri) => {
        let base64 = await FS.readAsStringAsync(uri, {
            encoding: FS.EncodingType.Base64,
        });
        return base64;
    };*/

    const predict = () => {
        /*photos.map((photo) => {
            photo['uri'] = uriToBase64(photo['uri'])
        })*/
        APIServices.InsertArticle(photos)
            .then((response) => {
                console.log(response)
                navigation.navigate('Result', {result:response})
            })
            .catch(error => console.log('error', error))

        
    }

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
                            console.log(photos[0].uri)
                            navigation.navigate('Crop', {photo: photos[0].uri})
                        }}
                ></Button>
                {//<TouchableOpacity onPress={() => { insertArticle }}>
                }
                <TouchableOpacity onPress={() => {predict()}}>
                    <Text style={styles.button}>Test send data to server</Text>
                </TouchableOpacity>
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
        fontFamily: 'Montserrat-Medium',
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