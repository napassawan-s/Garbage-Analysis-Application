import { StyleSheet,View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
//import { Text } from '../components/Text';

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Garbage Analysis Application</Text> 
            <TouchableOpacity onPress={() => navigation.navigate('SelectPhotos') }>
                <Text style={styles.button} >Upload</Text>
            </TouchableOpacity>
        </View>
        
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 200,
        height: 200,
        borderRadius: 200,
        lineHeight: 200,
        textAlign: 'center'
        
    }
  });

export default Home;