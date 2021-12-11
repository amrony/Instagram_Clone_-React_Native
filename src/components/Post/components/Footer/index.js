import React, { useState, useEffect } from 'react'
import { View,Text, TouchableWithoutFeedback } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

function Footer({likesCount: likesCountProp, caption, postedAt}) {

    const [ isLiked, setIsLike ] = useState(false);
    const [ likesCount, setLikesCount ] = useState(0);
    

    const onLikePress = ()=>{
        
        const amount = isLiked ? -1 : 1;
        setLikesCount(likesCount + amount);

        setIsLike(!isLiked);
    }

    useEffect( ()=>{
        setLikesCount(likesCountProp)
    },[]);
   

    return (
        
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                
                <View style={styles.leftIcon}>
                    <TouchableWithoutFeedback onPress={onLikePress}>
                        {
                        isLiked ? 
                            <ADIcon name="heart" size={25} color={"#c30000"}/>
                            :
                            <ADIcon name="hearto" size={25} color={"#545454"} />
                        }
                        
                    </TouchableWithoutFeedback>
                    
                    <FontistoIcon name="comment" size={25} />
                    <IoniconsIcon name="paper-plane-outline" size={25} />
                </View>

                <FAIcon name="bookmark-o" size={25} />
                
                
            </View>

            {/* <View> */}
                <Text style={styles.likes}>{likesCount} Likes</Text>
                <Text style={styles.caption}>{caption}</Text>
                <Text style={styles.cratedAt}>{postedAt}</Text>
            {/* </View> */}

        </View>
        
    )
}

export default Footer;
