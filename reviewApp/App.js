import React, { useState } from 'react'
// import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import HomeScreen from './screens/HomeScreen'

const getFonts = () => Font.loadAsync({
    'tangerine-regular': require('./assets/fonts/Tangerine-Regular.ttf'),
    'tangerine-bold': require('./assets/fonts/Tangerine-Bold.ttf')
})


export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false)

    if(fontsLoaded) {
        return (
            <HomeScreen />
        )
    } else {
        return (
            <AppLoading 
            startAsync={getFonts}
            onFinish={() => setFontsLoaded(true)}
            />
        )
    }
}