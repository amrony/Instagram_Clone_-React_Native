import React, { Component } from 'react';
import {Text} from 'react-native';

import Post from '../../components/Post'
import Feed from '../../components/Feed'

// const post = {
//     user: {
//         imageUri: 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
//         name: 'Aminul Islam'
//     },
//     imageUri: 'https://cdn.pixabay.com/photo/2020/06/30/21/53/walking-5357721_960_720.jpg',
//     caption: 'Beautyful Place #Instragram',
//     likesCount: 1225,
//     postedAt: '6 minutes ago'
// }

class HomeScreen extends Component {
   
    render() {
        
        return (
            <>
                {/* <Stories /> */}
                <Feed />
            </>
        )
    }
}
export default HomeScreen;
