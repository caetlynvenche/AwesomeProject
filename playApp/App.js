import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HomeScreen from './components/HomeScreen'
import NameAge from './components/NameAge'
import List from './components/List'
import Sandbox from './components/Sandbox'

const App = () => {
	return (
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss()
		}}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.boldBigText}>Header</Text>
				</View>

				<NameAge styles={styles} />
				{/* <HomeScreen styles={styles} /> */}
				{/* <List styles={styles} /> */}
				{/* <Sandbox /> */}

			</View>
		</TouchableWithoutFeedback>
		
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
		backgroundColor: 'pink',
		paddingTop: 40,
		paddingHorizontal: 20,
	},
	header: {
		borderWidth: 1,
		borderColor: 'black',
		borderStyle: 'solid',
		width: '100%',
		padding: 20,
	},
	boldBigText: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	border: {
		borderWidth: 1,
		borderColor: 'black',
		borderStyle: 'solid',
		width: '80%',
		padding: 30,
		margin: 20,
	},
	buttonContainer: {
		margin: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200,
	},
	items: {
		marginTop: 24,
		padding: 30,
		backgroundColor: 'lightgray',
		borderColor: 'black',
		borderWidth: 1,
		flexDirection: 'row',
	},
	itemText: {
		marginLeft: 10,
	},
	content: {
		flex: 1,
	},
	list: {
		flex: 1,
		marginTop: 10,
	},
});

export default App
