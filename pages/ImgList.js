import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

let width = Dimensions.get('screen').width *0.32
let margin = Dimensions.get('screen').width * 0.0065

const ImgList = ({ route, navigation }) => {
    let photos = route.params.pics;
    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.imgContainer}>
                {
                    photos['pic'].map((photo, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={()=>navigation.navigate('Enlarge', {pic: photo['uri']})}>
                                <Image
                                    source={{ uri: photo['uri'] }}
                                    style={styles.img} />
                            </TouchableOpacity>

                        )
                    })
                }
            </View>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    title: {
        fontFamily: 'Montserrat-Bold',
    },
    heading: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    button: {
        color: 'black'
    },
    img: {
        width: width,
        height: width,
        margin: margin,
    },
    imgContainer: { 
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default ImgList;