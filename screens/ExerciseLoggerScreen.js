import React, { useState } from 'react';
import Title from '../components/Title';
import Input from '../components/Input';
import CategoryText from '../components/CategoryText';
import AreaToggle from '../components/AreaToggle';
import FooterButtons from '../components/FooterButtons';
import { GlobalStyles } from '../styles/GlobalStyles';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ExerciseLoggerScreen = ({ navigation }) => {
    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    const [evaluation, setEvaluation] = useState({
        easy: false,
        medium: false,
        hard: false,
    });

    const handleFinishActivity = () => {
        console.log(weight, sets, reps, evaluation);
    }


    return (
        <View style={GlobalStyles.container}>
            <Title title="Cadeira Flexionadora" />
            <View style={styles.historyContainer}>
                <Title title="Histórico" />
                <TouchableOpacity
                    style={styles.historyContent}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('History')}
                >
                    <Text style={styles.historyText}>25kgs, 3 set, 8 reps</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.exerciseDetailsContainer}>
                <Input name="Weight" keyboardType="numeric" handleName={event => setWeight(event)} />
                <Input name="Sets" keyboardType="numeric" handleName={event => setSets(event)} />
                <Input name="Reps" keyboardType="numeric" handleName={event => setReps(event)} />
                <CategoryText name="Evaluation:" />
                <View style={{ flexDirection: 'row', height: 50 }}>
                <AreaToggle name="e" value={evaluation.easy} onToggle={
                    () => setEvaluation({ ...false, easy: true })
                } />
                <AreaToggle name="m" value={evaluation.medium} onToggle={
                    () => setEvaluation({ ...false, medium: true })
                } />
                <AreaToggle name="h" value={evaluation.hard} onToggle={
                    () => setEvaluation({ ...false, hard: true })
                } />
            </View>
            </View>
            <FooterButtons
                navigation={navigation} acceptText="Finish" confirm={() => handleFinishActivity()} />
        </View>
    )
}

const styles = StyleSheet.create({
    historyContainer: {
        paddingHorizontal: 20,
        paddingBottom: 50,
        width: '100%',
    },
    historyContent: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    historyText: {
        fontSize: 30,
        color: '#434343',
    },
    exerciseDetailsContainer: {
        maxWidth: '80%',
        paddingLeft: 40
    },
})

export default ExerciseLoggerScreen