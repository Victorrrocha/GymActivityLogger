import React from 'react'
import { View, Text, StyleSheet, TextInput } from "react-native";
import CategoryText from './CategoryText'

const InputName = () => {
    return (
            <View style={styles.inputArea}>
                <CategoryText name="Name:"/>
                <View style={styles.inputView}>
                    <TextInput style={styles.input}/>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center'
    },
    inputView:{
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 100,
        padding: 0,
        overflow: 'hidden'
    },
    input: {
        height: 20,
        margin: 10,
        backgroundColor: 'white',
        paddingLeft: 10,
    }
})

export default InputName