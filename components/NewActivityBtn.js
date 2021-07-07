import React from 'react'
import { View, StyleSheet, Text, Button } from "react-native"

const NewActivityBtn = ({navigation}) => {
    return(
        <View style={styles.button}>
            <Button 
                title='New Activity'
                onPress={() => navigation.navigate('New Activity')} />
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        marginVertical: 15,
    }
})

export default NewActivityBtn