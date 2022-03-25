import { StyleSheet,View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

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
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        margin: 30,
        backgroundColor: '#67E0B4',
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        color: 'white',
        width: 200,
        height: 200,
        borderRadius: 100,
        lineHeight: 200,
        textAlign: 'center',
        overflow: 'hidden'
        
    }
  });

export default Home;