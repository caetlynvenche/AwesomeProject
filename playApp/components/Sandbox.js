import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 40,
        backgroundColor: '#22f2'
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
        flex: 1,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 10,
        flex: 1,
    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 10,
        flex: 1,
    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 10,
        flex: 1,
    },
})