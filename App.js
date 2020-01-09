import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen'

const MainNavagator = createStackNavigator({
  Home: {screen: HomeScreen}
})
//how do i pass down styles?

// export default function App() {

//   return (
//     <View style={styles.container}>
//       <HomeScreen styles={styles} />

//     </View>
//   );
// }

const App = createAppContainer(MainNavagator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  headerstyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  border: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    width: '80%',
    padding: 30,
    margin: 20,
  },
});

export default App
