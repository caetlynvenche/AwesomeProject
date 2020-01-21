import React, { useState } from 'react'
// import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Navigator from './routes/HomeStack'

const getFonts = () => Font.loadAsync({
    'tangerine-regular': require('./assets/fonts/Tangerine-Regular.ttf'),
    'tangerine-bold': require('./assets/fonts/Tangerine-Bold.ttf')
})

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false)

    if(fontsLoaded) {
        return (
            <Navigator />
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