import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, titleText }) {
    const openMenu = () => {
        navigation.openDrawer()
        // console.log("please")
    }

    return (
        <View style={styles.header}>
            <MaterialIcons
                name='menu'
                size={28}
                onPress={openMenu}
                style={styles.icon}
            />
            <View>
                <Text style={styles.headerText}>{titleText}</Text>
            </View>
        </View>
    )
}

let width = Dimensions.get('window').width

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
})