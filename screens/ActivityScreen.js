import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import Card from '../components/Card';

const ActivityScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Show Activities</Text>
            <Card name='Cadeira extensora' area='Peito' date='02/07/2021'/>
            <Button title='New Activity'
                    onPress={() => navigation.navigate('New Activity')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#434343',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 30,
        color: 'white'
    } 
})

export default ActivityScreen;