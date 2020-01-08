import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './components/Counter';

// class Counter extends React.Component {

//   state = {count: 0}

//   increaseCount = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   decreaseCount = () => {
//     this.setState({count: this.state.count - 1})
//   }
//   clearCount = () => {
//     this.setState({count: 0})
//   }

//   render() {
//     const {count} = this.state
//     const {color, size} = this.props

//     return (
//       <View>
//         <Text style={{color, fontSize: size}}>
//           {count}
//         </Text>
//         <Button
//           onPress={this.increaseCount}
//           title="+" />
//         <Button
//           onPress={this.decreaseCount}
//           title="-" />
//         <Button
//           onPress={this.clearCount}
//           title="Clear" />
//       </View>
//     )
//   }
// }

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.headerstyle}>Caetlyn Says Hi!!!</Text>
      <Text>I am working on React Native... finally--</Text>

        <Counter color={'steelblue'} size={80} />

    </View>
  );
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
});
