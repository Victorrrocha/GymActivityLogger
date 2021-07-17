import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, CheckBox, TouchableOpacity } from "react-native";
import { GlobalStyles } from '../styles/GlobalStyles';
import Title from '../components/Title';
import InputName from '../components/InputName';
import CategoryText from '../components/CategoryText';

const NewActivityScreen = () => {
    const [isPernaSelected, setPernaSelected] = useState(false)
    const [isPeitoSelected, setPeitoSelected] = useState(false)

    return(
        <View style={GlobalStyles.container}>
            <Title title='New Activity'/>
            <InputName />
            
            <View style={styles.bodyArea} >
                <CategoryText name='Body Area:'/>
                <View style={styles.checkOptContainer}>

                    <View style={styles.checkOptRow}>
                        <View style={styles.checkOpt}>
                            <CheckBox value={isPernaSelected}
                                    onValueChange={setPernaSelected}/>
                            <Text style={styles.itemText}>Perna</Text>
                        </View>
                        <View style={styles.checkOpt}>
                            <CheckBox value={isPeitoSelected}
                                    onValueChange={setPeitoSelected}/>
                            <Text style={styles.itemText}>Peito</Text>
                        </View>
                    </View>
                    
                </View>
            </View>

            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bodyArea: {
        marginTop: 20,
        width: '90%'
    },
    checkOptContainer: {
        marginTop: 10,
        marginBottom: 20
    },
    checkOptRow: {
        flexDirection: 'row', 
        justifyContent: 'space-around'        
    },
    checkOpt: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        color: 'white',
        fontSize: 15
    },
    //--------------------------
    buttonsView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '90%'
    },
    button: {
        padding: 10,
        alignSelf: 'flex-end',
        marginBottom: 20
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})


export default NewActivityScreen;