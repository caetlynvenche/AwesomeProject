import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/About'
import Header from '../shared/Header'
import React from 'react'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} titleText='About GameZone' />,
            }
        }
    },
}
//first screen is default/bottom of stack

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
})

export default AboutStack