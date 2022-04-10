import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import ResultPanel from '../components/ResultPanel';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

/*let items = [{
    uniqueId: 'Glass',
    title: 'Glass',
    pic: [{width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/27/200/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/17/200/300'}]
}, {
    uniqueId: 'Metal',
    title: 'Metal',
    pic: [{width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/27/200/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/17/200/300'}]
}, {
    uniqueId: 'Paper',
    title: 'Paper',
    pic: [{width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/27/200/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/17/200/300'}]
}, {
    uniqueId: 'Plastic',
    title: 'Plastic',
    pic: [{width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/27/200/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/17/200/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'}, {width: 200,height: 300,uri:'https://picsum.photos/id/237/400/300'},]
},]*/


const Result = ({ route,props, navigation }) => {
    let responses = route.params.result;
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
            <ScrollView>
                <View style={{justifyContent: 'flex-start'}} >
                {
                    responses.map((item, index) => {
                        //console.log("response pass from ShowSelected: " + responses[index]['title'])
                        if(item['pic'].length != 0){
                            return (
                                <View key={index} >
                                    <TouchableOpacity onPress={()=>navigation.navigate('ImgList', {pics: item}) }>
                                        <ResultPanel
                                            key={responses.uniqueId}
                                            data={item} />
                                    </TouchableOpacity>
                                </View>
    
                            );
                        }
                    })
                }
            </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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