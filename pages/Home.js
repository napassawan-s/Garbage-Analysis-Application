import { StyleSheet,View } from 'react-native';
import { Text } from 'react-native';
//import { Text } from '../components/Text';

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Garbage Analysis Application</Text> 
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
        fontFamily: 'Montserrat',
    }
  });

export default Home;