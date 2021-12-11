import React from 'react';
import Story from '../Stroy';
import { View, FlatList } from 'react-native';
import styles from './style';

const data = [
    {
        id: 1,
        imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_960_720.jpg',
        name     : 'Aminul Islam'
    },    
    {
        id: 2,
        imageUri : 'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg',
        name     : 'Forid'
    },    
    {
        id: 3,
        imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg',
        name     : 'Kawser'
    },
    {
        id: 4,
        imageUri : 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
        name     : 'Abul Hossain'
    },
    {
        id: 5,
        imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/10/boy-529065_960_720.jpg',
        name     : 'Mehedi'
    },    
    {
        id: 6,
        imageUri : 'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg',
        name     : 'rOnY'
    },    
    {
        id: 7,
        imageUri : 'https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg',
        name     : 'Abul Hossain'
    },
    {
        id: 8,
        imageUri : 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_960_720.jpg',
        name     : 'Mehedi'
    },
]

function Stories() {
    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            data={data}
            keyExtractor={ ({id}) => id }
            renderItem={ ({item})=> <Story imageUri={item.imageUri} name={item.name} /> }
        />
           
    )
}

export default Stories;
