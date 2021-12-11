import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    container: {
        margin: 8,
    },
    iconContainer: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftIcon: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between'
    },
    likes: {
        fontWeight: 'bold',
        margin: 3
    },
    caption: {
        fontWeight: 'bold',
        margin: 3
    },
    cratedAt: {
        color: "#8c8c8c",
        margin: 3
    }

});

export default styles;