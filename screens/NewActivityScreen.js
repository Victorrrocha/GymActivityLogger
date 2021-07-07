import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const NewActivityScreen = () => {
    return(
        <View style={styles.container}>
            <Text >New Activity</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: 'white'
    } 
})

export default NewActivityScreen;