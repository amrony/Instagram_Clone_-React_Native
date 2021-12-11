import React from 'react';
import ProfilePicture from '../profilePicture';
import {View, Text} from 'react-native';
import styles from './style';

function Story({ imageUri, name }) {
    return (
        <View>
            <ProfilePicture uri={ imageUri } />
            <Text style={ styles.name }>{ name }</Text>
        </View>
    )
}
export default Story;
