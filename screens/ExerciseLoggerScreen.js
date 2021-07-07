import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const ExerciseLoggerScreen = () => {
    return(
        <View style={styles.container}>
            <Text >Exercise Logger</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 30,
        color: 'white'
    } 
})

export default ExerciseLoggerScreen