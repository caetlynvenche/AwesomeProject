import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
    titleText: {
        fontFamily: 'tangerine-bold',
        fontSize: 50,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        fontFamily: 'tangerine-bold',
        fontSize: 30,
    },
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    }
}