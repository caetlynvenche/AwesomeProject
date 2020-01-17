import React, { useState } from 'react'
import { Text, View, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';


const List = (props) => {
    const [people, setPeople] = useState([
        {
            name: 'Ashe', 
            id: '1'
        },
        {
            name: 'Sage',
            id: '2'
        },
        {
            name: 'Thisle',
            id: '3'
        },
        {
            name: 'Fae', 
            id: '4'
        },
        {
            name: 'Clay',
            id: '5'
        },
        {
            name: 'Rosemary',
            id: '6'
        }
    ])

    const pressHandler = id => {
        setPeople(prevPeople => {
            return prevPeople.filter(person => person.id !== id)
        })
    }

    return (
        <View>
            {/* flatlist is better for bigger lists. doesnt load in out of view stuff until needed */}
            <FlatList
                // numColumns={2}
                data={people}
                renderItem={( {item} ) => (
                    <TouchableOpacity
                            onPress={() => pressHandler(item.id)}>
                        <Text style={props.styles.items}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id} />

            {/* <ScrollView>
                { people.map(item =>
                    <View key={item.key}>
                        <Text style={props.styles.items}>{item.name}</Text>
                    </View> 
                )}
            </ScrollView> */}
        </View>
    )
}

export default List