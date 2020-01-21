import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            headerStyle: { backgroundColor: '#eee' },
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

export default createAppContainer(HomeStack)