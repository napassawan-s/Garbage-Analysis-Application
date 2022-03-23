import { StyleSheet,View } from 'react-native';
import { Text } from 'react-native';
import ResultPanel from '../components/ResultPanel';

const Result = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Garbage Analysis Application</Text> 
            <ResultPanel />
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
        fontFamily: 'Montserrat-Regular',
    }
  });

export default Result;