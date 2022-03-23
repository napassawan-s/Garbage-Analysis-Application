import React from 'react';
import { Card } from 'react-native-elements';
import { Text, View, StyleSheet, Image} from 'react-native';
//import { Text } from './Text';

const ResultPanel = (props, { navigation }) => {
    return (
    <Card containerStyle={{ width: '95%', borderStyle: 'none' }}>
        <Card.Title style={styles.cardTitle}>GLASS</Card.Title>
        <Card.Divider />
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{width: 50, height: 50}}
        />
    </Card>
    );
}

const styles = StyleSheet.create({
    cardTitle: {
        textAlign: 'left'
    }
});

export default ResultPanel;