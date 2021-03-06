import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} titleText='GameZone' />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}
//first screen is default/bottom of stack

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
})

export default HomeStack