import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import APIServices from '../components/APIServices'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageEditor } from "expo-image-editor";
import { useState } from 'react';
import * as FS from 'expo-file-system';


const BUTTON_SIZE = 30
const BORDER_WIDTH = 1

let croppedB64 = ''
let height = Dimensions.get('screen').width * 0.32
let margin = Dimensions.get('screen').width * 0.0065

const ShowSelected = ({ route,props,  navigation }) => {
    let photos = route.params.photos;

    const [imageUri, setImageUri] = useState(undefined);
    const [editorVisible, setEditorVisible] = useState(false);

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

    const predict = () => {
        APIServices.InsertArticle(photos)
            .then((response) => {
                console.log(response)
                navigation.navigate('Result', {result:response})
            })
            .catch(error => console.log('error', error))

        
    }

    const selectPhoto = async (photo) => {
        launchEditor(photo);
    };

    const launchEditor = (uri) => {
        setImageUri(uri);
        setEditorVisible(true);
    };

    const insertCropped = async (originalUri,cropped) => {
        photos.forEach(async (photo) => {
            if(originalUri == photo['uri']) {
                photo['uri'] = cropped
                let base64 = await FS.readAsStringAsync(cropped, {
                    encoding: FS.EncodingType.Base64,
                });
                photo['base64'] = base64
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                {   
                    photos.map((photo, index) => {
                        return (
                            <View style={styles.item} key={index}>
                                <Image
                                source={{ uri: photo['uri'] }}
                                style={styles.img} />
                                <TouchableOpacity onPress={() => 
                                {
                                    selectPhoto(photo['uri'])
                                }} 
                                style={styles.cropbutton}>
                                    <Icon name={'crop'} color={'grey'} size={BUTTON_SIZE/2} />
                                </TouchableOpacity>
                            </View>
                            
                        )
                    })
                }
            </View>
            <View>
                <ImageEditor
                visible={editorVisible}
                onCloseEditor={() => setEditorVisible(false)}
                imageUri={imageUri}
                fixedCropAspectRatio={16 / 9}
                lockAspectRatio={false}
                minimumCropDimensions={{
                    width: 100,
                    height: 100,
                }}
                onEditingComplete={(result) => {
                    console.log('result: '+result['uri'])
                    console.log('og: '+imageUri)
                    insertCropped(imageUri, result['uri'])
                    console.log(croppedB64)
                    console.log('done cropping eiei')
                }}
                mode="crop-only"
                />
                <TouchableOpacity onPress={() => {predict()}}>
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
        height: height,
        
    },
    listContainer: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%'
    },
    item: {
        width: '32%',
        margin: margin,
    },
    cropbutton:{
        justifyContent:'center',
        position: 'absolute',
        alignItems:'center',
        backgroundColor: 'white',
        borderColor: 'transparent',
        width:BUTTON_SIZE+BORDER_WIDTH,
        height:BUTTON_SIZE+BORDER_WIDTH,
        borderWidth:BORDER_WIDTH,
        borderRadius:BUTTON_SIZE/2,
    }
});

export default ShowSelected;