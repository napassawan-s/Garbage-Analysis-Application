import { StyleSheet, Text, View, Button } from 'react-native';
import ResultPanel from '../components/ResultPanel';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

let items = [{
    uniqueId: 'Glass',
    title: 'Glass',
    uri: ['https://picsum.photos/id/237/400/300', 'https://picsum.photos/id/27/200/300', 'https://picsum.photos/id/17/200/300']
}, {
    uniqueId: 'Metal',
    title: 'Metal',
    uri: ['https://picsum.photos/id/127/200/300', 'https://picsum.photos/id/23/200/300', 'https://picsum.photos/id/37/200/300']
}, {
    uniqueId: 'Paper',
    title: 'Paper',
    uri: ['https://picsum.photos/id/372/200/300', 'https://picsum.photos/id/7/200/300', 'https://picsum.photos/id/3/200/300']
}, {
    uniqueId: 'Plastic',
    title: 'Plastic',
    uri: ['https://picsum.photos/id/3/200/300', 'https://picsum.photos/id/72/200/300', 'https://picsum.photos/id/723/200/300']
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