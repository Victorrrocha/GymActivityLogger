import React from 'react'
import { StyleSheet, Text, View, CheckBox } from 'react-native'

const AreaToggle = ({name, value, onToggle}) => {
    return (
        <View style={styles.checkOpt}>
            <CheckBox value={value}
                    onValueChange={() => onToggle()}/>
            <Text style={styles.itemText}>{name}</Text>
        </View>
    )
}

export default AreaToggle

const styles = StyleSheet.create({
    checkOpt: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
        itemText: {
        color: 'white',
        fontSize: 20
    }
})
