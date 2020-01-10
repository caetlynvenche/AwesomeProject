import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './components/HomeScreen'

const App = (props) => {
  return (
    <View style={styles.container}>
      <HomeScreen styles={styles} />
      <Text>App</Text>
    </View>
  )
}


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
