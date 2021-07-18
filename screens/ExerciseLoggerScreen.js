import React from 'react';
import Title from '../components/Title';
import Input from '../components/Input';
import CategoryText from '../components/CategoryText';
import FooterButtons from '../components/FooterButtons';
import { GlobalStyles } from '../styles/GlobalStyles';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ExerciseLoggerScreen = ({ navigation }) => {
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
                <Input name="Weight" />
                <Input name="Sets" />
                <Input name="Reps" />
                <CategoryText name="Evaluation:" />
            </View>
            <FooterButtons navigation={navigation} acceptText="Finish" />
        </View>
    )
}

const styles = StyleSheet.create({
    historyContainer: {
        padding: 20,
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
    },
    exerciseDetailsContainer: {
        maxWidth: '80%',
        paddingLeft: 40
    },
})

export default ExerciseLoggerScreen