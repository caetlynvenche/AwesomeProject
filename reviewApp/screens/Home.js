import React, { useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import {globalStyles} from '../styles/globalStyles'
import Card from '../shared/card'
import ReviewForm from './ReviewForm'
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }){
    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {
            title: 'ESO',
            body: 'lorem ipsum',
            key: '1',
            rating: 2
        },
        {
            title: 'Sims 4',
            body: 'lorem ipsum',
            key: '2',
            rating: 5
        },
        {
            title: 'Skyrim',
            body: 'lorem ipsum',
            key: '3',
            rating: 4
        }
    ])

    const addReview = (review) => {
        review.key = Math.random().toString()
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
                
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card><Text style={globalStyles.titleText}>{item.title}</Text></Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
})