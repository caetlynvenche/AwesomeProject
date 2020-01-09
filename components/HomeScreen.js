import React from 'react';
import { Text, View, Button } from 'react-native'
import Counter from './components/Counter';

export default function HomeScreen(props) {
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

            {/* <Counter color={'steelblue'} size={80} styles={styles}  /> */}
        </View>
    )
}