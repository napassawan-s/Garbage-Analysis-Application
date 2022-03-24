import { StyleSheet, Text, View, Button } from 'react-native';
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

const Result = ({ probs, navigation }) => {
    return (
        <SafeAreaProvider style={styles.container}>
            {/*<Header
                containerStyle= {{backgroundColor: 'white', borderBottomWidth: 0,}}
                leftComponent={ 
                <Button title="back" color='black'/>
                }
                rightComponent={
                    <Button title="close" color='black'/>
                }
                centerComponent={{ text: 'Result', style: styles.heading }}
            />*/}
            <View>
                {
                    items.map((item, index) => {
                        return (

                            <View key={index}>
                                <TouchableOpacity onPress={()=>navigation.navigate('ImgList', {pics: item}) }>
                                    <ResultPanel
                                        key={items.uniqueId}
                                        data={item} />
                                </TouchableOpacity>

                            </View>

                        );
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
    }
});

export default Result;