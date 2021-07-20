import React from 'react'
import { View, Text, StyleSheet, TextInput } from "react-native";
import CategoryText from './CategoryText'

const Input = ({name, handleName}) => {
    
    return (
            <View style={styles.inputArea}>
                <View style={{ width: 95 }}><CategoryText name={`${name}: `}/></View>
                <View style={styles.inputView}>
                    <TextInput style={styles.input} onChangeText={(event) => handleName(event)}/>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginBottom: 10
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

export default Input