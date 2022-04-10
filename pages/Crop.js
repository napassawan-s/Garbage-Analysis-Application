import { View, Image, Button } from 'react-native';
import { ImageEditor } from "expo-image-editor";
import { useState } from 'react';
import React from 'react';


const Crop = ({ navigation, route }) => {
    let photo = route.params.photo;
    console.log(photo)
    const [imageUri, setImageUri] = useState(undefined);
    const [editorVisible, setEditorVisible] = useState(false);

    const selectPhoto = async () => {
        launchEditor(photo);
    };

    const launchEditor = (uri) => {
        setImageUri(uri);
        setEditorVisible(true);
    };

    return (
        <View>
        <Image
            style={{ height: 300, width: 300 }}
            source={{ uri: photo }}
        />
        <Button title="Crop" onPress={() => selectPhoto()} />
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
                console.log(result);
                navigation.navigate('ShowSelected', {cropped: result})
                }}
            mode="crop-only"
        />
        </View>
    );
}

export default Crop;