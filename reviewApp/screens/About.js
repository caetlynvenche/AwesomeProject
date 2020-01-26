import React from 'react'
import { View, Text } from 'react-native'
import {globalStyles} from '../styles/globalStyles'

export default function About(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About</Text>
            <Text style={globalStyles.paragraph}>And here is an interesting configuration of words that really just says what we do as a company and what sets us apart from other companies that do the same sort of thing.</Text>
            <Text style={globalStyles.paragraph}>I really have no reason to be using such a flow-y script throughout this app. I had just needed to find a new font family to practice pulling one in, and this just felt like a fun idea.</Text>
        </View>
    )
}