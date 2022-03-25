import React from 'react';
import { Card, Header } from 'react-native-elements';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ResultPanel = (props, { navigation }) => {
    return (
        
            <Card containerStyle={{
                width: '97%', backgroundColor: 'white',
                borderWidth: 0,
                shadowColor: 'white',
                justifyContent: 'center',
                alignSelf: 'center'

            }}
            >
                <Card.Title style={styles.cardTitle}>{props.data['title']}</Card.Title>
                <Card.Divider />
                <View style={styles.imgContainer}>
                    {
                        props.data['pic'].map((pic, index) => {
                            return (
                                <Image
                                    key={index}
                                    source={{ uri: pic['uri'] }}
                                    style={styles.img}
                                />
                            );
                        })
                    }
                </View>
            </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardTitle: {
        textAlign: 'left',
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'normal',
        fontSize: 17
    },
    img: {
        width: 65,
        height: 65,
        margin: 2,
        resizeMode: 'cover'
    },
    imgContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
   
});

export default ResultPanel;