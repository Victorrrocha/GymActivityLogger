import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>GymLogger</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: getStatusBarHeight(),
        width: '100%',
        height: 60,
        backgroundColor: '#46E89C',
        justifyContent: 'center'
    },
    title: {
        paddingLeft: 20,
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: ''
    }
})

export default Header;