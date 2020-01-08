import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Counter extends React.Component {

  state = {count: 0}

  increaseCount = () => {
    this.setState({count: this.state.count + 1})
  }
  decreaseCount = () => {
    this.setState({count: this.state.count - 1})
  }
  clearCount = () => {
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <View>
        <Text style={{color, fontSize: size}}>
          {count}
        </Text>
        <Button
          onPress={this.increaseCount}
          title="+" />
        <Button
          onPress={this.decreaseCount}
          title="-" />
        <Button
          onPress={this.clearCount}
          title="Clear" />
      </View>
    )
  }
}