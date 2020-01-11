import React, { useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native';


const NameAge = (props) => {
	const [name, setName] = useState("-")
    const [age, setAge] = useState("-")
    
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
        </View>
    )
}

export default NameAge