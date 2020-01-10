import React from 'react';
import { Text, View, Button } from 'react-native'
import Counter from './Counter';

const HomeScreen = (props) =>  {
    const home = () => {
        alert("home page alert")
    }
    return (
        <View>
            <Text style={props.styles.headerstyle}>Caetlyn Says Hi!!!</Text>
            <Text>I am working on React Native... finally--</Text>

            <Button
                title="Home Page Button"
                onPress={home} />

            {/* <Counter color={'steelblue'} size={80} styles={props.styles}  /> */}
        </View>
    )
}

export default HomeScreen