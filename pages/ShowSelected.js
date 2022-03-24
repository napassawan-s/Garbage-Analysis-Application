import React, { useMemo } from 'react';
import { Text, View, StyleSheet, Alert, Dimensions } from 'react-native';

const ShowSelected = ({ route, navigation }) => {
    const { photos } = route.params.photos;

    return (
        <Text>Received {photos} photos</Text>
    )
}

export default ShowSelected;