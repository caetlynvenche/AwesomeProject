import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {globalStyles} from '../styles/globalStyles'

export default function HomeScreen(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    )
}