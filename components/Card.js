import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.area}>{props.area}</Text>
            <Text style={styles.date}>Last time: {props.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: 'white',
        height: 150,
        width: '90%',
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    area:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#434343',
        borderRadius: 100,
        alignSelf: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    date:{
        fontSize: 15,
        fontWeight: 'normal',
    }
})

export default Card