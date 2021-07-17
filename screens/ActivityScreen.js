import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Card from '../components/Card';
import Title from '../components/Title';
import NewActivityBtn from '../components/NewActivityBtn';
import { GlobalStyles } from '../styles/GlobalStyles';

const Activities = [
    {
        id: '0001',
        name: 'LegPress',
        area: ['Pernas', 'Panturrilha'],
        date: '01/01/2021'
    },
    {
        id: '0002',
        name: 'Cadeira extensora',
        area: ['Ombros', 'Peito'],
        date: '02/02/2021'
    },
    {
        id: '0003',
        name: 'LegPress',
        area: ['Pernas', 'Panturrilha'],
        date: '01/01/2021'
    },
    {
        id: '0004',
        name: 'Cadeira extensora',
        area: ['Ombros', 'Peito'],
        date: '02/02/2021'
    },
    {
        id: '0005',
        name: 'LegPress',
        area: ['Pernas', 'Panturrilha'],
        date: '01/01/2021'
    },
    {
        id: '0006',
        name: 'Cadeira extensora',
        area: ['Ombros', 'Peito'],
        date: '02/02/2021'
    }
]

const ActivityScreen = ({navigation}) => {
    return(
        <View style={GlobalStyles.container}>
            <Title title='Activities'/>
            <FlatList style={styles.list}
                contentContainerStyle={{  }}
                data={Activities}
                renderItem={(obj) => {
                    return(
                        <Card name={obj.item.name}
                            area={obj.item.area}
                            date={obj.item.date} />
                    )
                }}
                keyExtractor={Activities => Activities.id}/>
                
            <NewActivityBtn navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
    }
})

export default ActivityScreen;