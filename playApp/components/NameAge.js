import React, { useState } from 'react'
import { Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'



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
        <View style={props.styles.content}>
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

			<View style={props.styles.list}>
				<FlatList
					// numColumns={2}
					data={people}
					renderItem={( {item} ) => (
						<TouchableOpacity
								onPress={() => handleDelete(item.id)}>
							<View style={props.styles.items}>
							<MaterialIcons name='delete' size={18} color='#333' />
							<Text style={props.styles.itemText}>{item.name} {item.age} </Text>
							</View>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id} />
				</View>
        </View>
    )
}

export default NameAge