import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
    },
    titleText: {
        fontFamily: 'tangerine-bold',
        fontSize: 30,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
})