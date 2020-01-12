import React, { useState } from 'react'
import { Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';


const NameAge = (props) => {
	const [name, setName] = useState("-")
	const [age, setAge] = useState("-")
	const [people, setPeople] = useState([
		{
			name: 'Sarah',
			age: 10,
			id: 1
		}
	])

	const handleAdd = () => {
		setPeople(prevPeople => {
			return [...prevPeople, {
				name,
				age,
				id: Math.random()
			}] 
		})
	}

	const handleDelete = (id) => {
		setPeople(prevPeople => {
            return prevPeople.filter(person => person.id !== id)
        })
	}
    
    return (
        <View>
            <Text>Name: {name} Age: {age}</Text>

			<Text>Enter Name:</Text>
			<TextInput
				// multiline
				style={props.styles.input}
				placeholder="Name"
				onChangeText={(value) => setName(value)} />

			<Text>Enter Age:</Text>
			<TextInput 
				style={props.styles.input}
				keyboardType="numeric"
				placeholder="Age"
				onChangeText={(value) => setAge(value)} />

			<Button 
				title="Add Name"
				onPress={handleAdd} />

			<FlatList
                // numColumns={2}
                data={people}
                renderItem={( {item} ) => (
                    <TouchableOpacity
                            onPress={() => handleDelete(item.id)}>
                        <Text style={props.styles.items}>{item.name} {item.age} </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id} />
        </View>
    )
}

export default NameAge