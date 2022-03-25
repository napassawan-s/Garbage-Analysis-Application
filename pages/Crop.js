import { ImageEditor } from "expo-image-editor";

const Crop = ({ photo }) => {
  /*const [imageUri, setImageUri] = useState(undefined);

  const [editorVisible, setEditorVisible] = useState(false);

  const selectPhoto = async () => {
    // Get the permission to access the camera roll
    const response = await ImagePicker.requestCameraRollPermissionsAsync();
    // If they said yes then launch the image picker
    if (response.granted) {
      const pickerResult = await ImagePicker.launchImageLibraryAsync();
      // Check they didn't cancel the picking
      if (!pickerResult.cancelled) {
        launchEditor(pickerResult.uri);
      }
    } else {
      // If not then alert the user they need to enable it
      Alert.alert(
        "Please enable camera roll permissions for this app in your settings."
      );
    }
  };*/
  let cropped = '';
  setEditorVisible(true);

  const launchEditor = (uri) => {
    // Then set the image uri
    setImageUri(uri);
    // And set the image editor to be visible
    setEditorVisible(true);
  };

  return (
    <View>
      <Image
        style={{ height: 300, width: 300 }}
        source={{ uri: imageData.uri }}
      />
      <ImageEditor
        visible={true}
        onCloseEditor={() => navigation.navigate('ShowSelected', {result: cropped})}
        imageUri={photo}
        fixedCropAspectRatio={16 / 9}
        lockAspectRatio={aspectLock}
        minimumCropDimensions={{
          width: 100,
          height: 100,
        }}
        onEditingComplete={(result) => {
          cropped = result;
        }}
        mode="full"
      />
    </View>
  );
}

export default Crop;