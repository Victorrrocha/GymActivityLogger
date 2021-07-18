import React from 'react';
import Title from '../components/Title';
import { GlobalStyles } from '../styles/GlobalStyles';
import { View, Text, StyleSheet, FlatList } from "react-native";

const history = [
    {
        id: '1',
        date: '02/07/2021',
        weight: 25,
        set: 3,
        reps: 8
    },
    {
        id: '2',
        date: '02/07/2021',
        weight: 30,
        set: 3,
        reps: 8
    },
    {
        id: '3',
        date: '02/07/2021',
        weight: 30,
        set: 3,
        reps: 8
    },
    {
        id: '4',
        date: '02/07/2021',
        weight: 25,
        set: 3,
        reps: 8
    },
    {
        id: '5',
        date: '02/07/2021',
        weight: 30,
        set: 3,
        reps: 8
    },
    {
        id: '6',
        date: '02/07/2021',
        weight: 30,
        set: 3,
        reps: 8
    },
]

const HistoryScreen = () => {
    return (
        <View style={GlobalStyles.container}>
            <Title title="History" />
            <FlatList
                data={history}
                renderItem={obj => {
                    

                    return (
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardDateText}>
                                {obj.item.date}
                            </Text>
                            <View style={[styles.cardExerciseContainer,
                                    (obj.item.id % 3 === 0) ? { backgroundColor: '#FFBB87' }
                                    : (obj.item.id % 3 === 2) ? { backgroundColor: '#DBFF87' }
                                    : { backgroundColor: '#87FF8F' }
                                    ]}>
                                <Text style={styles.cardExerciseText}>
                                    {obj.item.weight}kgs,
                                    {' ' + obj.item.set} set,
                                    {' ' + obj.item.reps} reps
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        minWidth: '100%',
        paddingTop: 5,
        paddingHorizontal: 20,
    },
    cardDateText: {
        color: '#989898',
        fontSize: 21,

    },
    cardExerciseContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    cardExerciseText: {
        color: '#434343',
        fontSize: 30,
    },
})

export default HistoryScreen;