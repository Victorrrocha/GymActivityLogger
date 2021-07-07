import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Area = ({area}) => {
    return(
        <Text style={styles.area}>{area}</Text>
    )
}

const styles = StyleSheet.create({
    area:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#434343',
        borderRadius: 100,
        alignSelf: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 15,
        marginRight: 5
    }
})

export default Area