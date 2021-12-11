import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../../components/Stories';

const data = [
    {
        id: 1,
        user: {
            imageUri: 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
            name: 'Aminul Islam'
        },
        imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_960_720.jpg',
        caption: 'Beautyful Place #Instragram',
        likesCount: 1225,
        postedAt: '6 minutes ago'
    },
    {
        id: 2,
        user: {
            imageUri: 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
            name: 'rOnY'
        },
        imageUri : 'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg',
        caption: 'Beautyful Place #Instragram',
        likesCount: 1225,
        postedAt: '12 hour ago'
    },
    {
        id: 3,
        user: {
            imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg',
            name: 'Abul Hossain'
        },
        imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg',
        caption: 'Beautyful Place #Instragram',
        likesCount: 1225,
        postedAt: '5 day ago'
    },
    {
        id: 4,
        user: {
            imageUri: 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
            name: 'Rocky'
        },
        imageUri : 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
        caption: 'Beautyful Place #Instragram',
        likesCount: 1225,
        postedAt: '2 hours ago'
    },
    {
        id: 5,
        user: {
            imageUri: 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
            name: 'Aminul Islam'
        },
        imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_960_720.jpg',
        caption: 'Beautyful Place #Instragram',
        likesCount: 1225,
        postedAt: '6 minutes ago'
    },
    {
        id: 6,
        user: {
            imageUri: 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
            name: 'rOnY'
        },
        imageUri : 'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg',
        caption: 'Beautyful Place #Instragram',
        likesCount: 1225,
        postedAt: '12 hour ago'
    },
    {
        id: 7,
        user: {
            imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg',
            name: 'Abul Hossain'
        },
        imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg',
        caption: 'Beautyful Place #Instragram',
        likesCount: 1225,
        postedAt: '5 day ago'
    },
    {
        id: 8,
        user: {
            imageUri: 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
            name: 'Rocky'
        },
        imageUri : 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
        caption: 'Beautyful Place #Instragram',
        likesCount: 1225,
        postedAt: '2 hours ago'
    }
]

export default function Feed() {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={ ({item}) => <Post post={item} /> }
            ListHeaderComponent={ Stories }
        />
    )
}
