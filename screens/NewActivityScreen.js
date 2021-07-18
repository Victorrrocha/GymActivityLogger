import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, CheckBox, TouchableOpacity } from "react-native";
import { GlobalStyles } from '../styles/GlobalStyles';
import Title from '../components/Title';
import Input from '../components/Input';
import CategoryText from '../components/CategoryText';
import FooterButtons from '../components/FooterButtons';

const NewActivityScreen = ({ navigation }) => {
    const [isPernaSelected, setPernaSelected] = useState(false)
    const [isPeitoSelected, setPeitoSelected] = useState(false)

    return(
        <View style={GlobalStyles.container}>
            <Title title='New Activity'/>
            <Input name="Name" />
            
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
            <FooterButtons navigation={navigation} acceptText="Confirm" />
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
})


export default NewActivityScreen;