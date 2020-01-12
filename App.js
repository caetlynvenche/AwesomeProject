import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import HomeScreen from './components/HomeScreen'
import NameAge from './components/NameAge'
import List from './components/List'

const App = () => {
	return (
    	<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.boldBigText}>Header</Text>
			</View>

			<NameAge styles={styles} />
			{/* <HomeScreen styles={styles} /> */}
			{/* <List styles={styles} /> */}

    	</View>
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
		fontSize: 24,
	}
});

export default App
