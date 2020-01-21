import React from 'react'
import { View, Text, Button } from 'react-native'
import {globalStyles} from '../styles/globalStyles'


export default function ReviewDetails({ navigation }){
    // const pressHandler = () => {
    //     navigation.goBack()
    //     //pops a screen off the stack and goes back to home screen
    // }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.paragraph}>{navigation.getParam('body')}</Text>
            {/* <Button 
                title='Back to Home Screen'
                onPress={pressHandler}
            /> */}
        </View> 
    )
}