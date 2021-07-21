import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CategoryText({name}) {
    return (
        <View>
            <Text style={styles.field}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        fontSize: 23,
        color: 'white',
        marginRight: 10
    }
})
