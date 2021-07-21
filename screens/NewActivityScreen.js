import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, CheckBox, TouchableOpacity } from "react-native";
import { GlobalStyles } from '../styles/GlobalStyles';
import Title from '../components/Title';
import Input from '../components/Input';
import AreaToggle from '../components/AreaToggle';
import CategoryText from '../components/CategoryText';
import FooterButtons from '../components/FooterButtons';

const NewActivityScreen = ({ navigation }) => {
    
    const [name, setName] = useState('')

    const [isCalvesSelected, setCalves] = useState(false)
    const [isHamstringsSelected, setHamstrings] = useState(false)
    const [isQuadricepsSelected, setQuadriceps] = useState(false)
    const [isGlutesSelected, setGlutes] = useState(false)
    const [isBicepsSelected, setBiceps] = useState(false)
    const [isTricepsSelected, setTriceps] = useState(false)
    const [isForearmsSelected, setForearms] = useState(false)
    const [isTrapeziusSelected, setTrapezius] = useState(false)
    const [isLatissimusSelected, setLatissimus] = useState(false)

    const HandleName = (name) => setName(name)
    const HandleCalves = () => setCalves(!isCalvesSelected)
    const HandleHamstrings = () => setHamstrings(!isHamstringsSelected)
    const HandleQuadriceps = () => setQuadriceps(!isQuadricepsSelected)
    const HandleGlutes = () => setGlutes(!isGlutesSelected)
    const HandleBiceps = () => setBiceps(!isBicepsSelected)
    const HandleTriceps = () => setTriceps(!isTricepsSelected)
    const HandleForearms = () => setForearms(!isForearmsSelected)
    const HandleTrapezius = () => setTrapezius(!isTrapeziusSelected)
    const HandleLatissimus = () => setLatissimus(!isLatissimusSelected)

    const confirm = () => {
        const activity = {
            id: Math.floor(Math.random() * (100 - 1) ),
            name,
            area: [isPeitoSelected ? "Peito" : null, isPernaSelected ? "Perna" : null],
            date: Date.now()
        }
        console.log(activity)
    }

    return(
        <View style={GlobalStyles.container}>
            <Title title='New Activity'/>
            <Input name="Name" handleName={HandleName}/>
            
            <View style={styles.bodyArea} >
                <CategoryText name='Body Area:'/>
                <View style={styles.checkOptContainer}>

                    <View style={styles.checkOptRow}>
                        <AreaToggle name="Calves" value={isCalvesSelected} onToggle={HandleCalves}/>
                        <AreaToggle name="Hamstrings" value={isHamstringsSelected} onToggle={HandleHamstrings}/>
                    </View>

                    <View style={styles.checkOptRow}>
                        <AreaToggle name="Quadriceps" value={isQuadricepsSelected} onToggle={HandleQuadriceps}/>
                        <AreaToggle name="Glutes" value={isGlutesSelected} onToggle={HandleGlutes}/>
                    </View>

                    <View style={styles.checkOptRow}>
                        <AreaToggle name="Biceps" value={isBicepsSelected} onToggle={HandleBiceps}/>
                        <AreaToggle name="Triceps" value={isTricepsSelected} onToggle={HandleTriceps}/>
                    </View>

                    <View style={styles.checkOptRow}>
                        <AreaToggle name="Forearms" value={isForearmsSelected} onToggle={HandleForearms}/>
                        <AreaToggle name="Trapezius" value={isTrapeziusSelected} onToggle={HandleTrapezius}/>
                    </View>

                    <View style={styles.checkOptRow}>
                        <AreaToggle name="Latissimus" value={isLatissimusSelected} onToggle={HandleLatissimus}/>
                    </View>
                </View>
            </View>

            <FooterButtons navigation={navigation} acceptText="Confirm" confirm={confirm} />
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
        justifyContent: 'space-around',
        marginTop: 20
    }
})


export default NewActivityScreen;