import { StyleSheet, Text, View, Button,Image } from 'react-native';
import ResultPanel from '../components/ResultPanel';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

let items = [{
    uniqueId: 'Glass',
    title: 'Glass',
    uri: ['https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png']
}, {
    uniqueId: 'Metal',
    title: 'Metal',
    uri: ['https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png']
}, {
    uniqueId: 'Paper',
    title: 'Paper',
    uri: ['https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png']
}, {
    uniqueId: 'Plastic',
    title: 'Plastic',
    uri: ['https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png']
},]

const ImgList = ({ route, navigation }) => {
    let photos = route.params.pics;
    console.log(photos)
    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.imgContainer}>
            {
                photos['uri'].map((photo, index) => {
                   return(
                  
                    <Image
                        key={index}
                        //source={{ uri: photo['uri'] }}
                        //source={require(uri)}
                        source = { {uri: photo } }
                        style={styles.img} />
    
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
        width: 120,
        height: 120,
        margin: 5,
        alignItems: 'center',
    },
    imgContainer: { //not centered yet
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center'
    }
});

export default ImgList;