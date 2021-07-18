import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Area from './Area'

const Card = ({ navigation ,name, area, date }) => {
    return (
        <TouchableOpacity
            style={styles.item}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ExerciseLogger')}
        >
            <View style={styles.card}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.AreasOfTheBody}>
                    {area.map( area => <Area key={area} area={area}/> )}
                </View>    
                <Text style={styles.date}>Last time: {date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 'auto',
        alignItems: 'center'
    },
    card: {
        padding: 10,
        backgroundColor: 'white',
        height: 'auto',
        width: '90%',
        borderRadius: 10,
        justifyContent:'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    date:{
        fontSize: 15,
        fontWeight: 'normal',
    },
    AreasOfTheBody: {
        flexDirection: 'row'
    }
})

export default Card