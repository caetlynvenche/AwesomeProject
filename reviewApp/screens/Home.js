import React, { useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/globalStyles'

export default function Home({ navigation }){
    const [reviews, setReviews] = useState([
        {
            title: 'One',
            body: 'lorem ipsum',
            key: '1'
        },
        {
            title: 'Two',
            body: 'lorem ipsum',
            key: '2'
        },
        {
            title: 'Three',
            body: 'lorem ipsum',
            key: '3'
        }
    ])

    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
        
    //     // navigation.push('ReviewDetails')
    //     //more explicit way. more complex might need this way 
    // }
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* <Button
                title="Go to Review Details"
                onPress={pressHandler} 
            /> */}
        </View>
    )
}