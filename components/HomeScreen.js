import React from 'react';
import { Text, View, Button } from 'react-native'
import Counter from './Counter';

const HomeScreen = (props) =>  {
    return (
        <View>
            <Text>Caetlyn Says Hi!!!</Text>
            <Text>I am working on React Native... finally--</Text>


            {/* <Counter color={'steelblue'} size={80} styles={props.styles}  /> */}
        </View>
    )
}

export default HomeScreen