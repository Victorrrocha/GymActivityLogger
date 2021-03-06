import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Card from '../components/Card';
import Title from '../components/Title';
import NewActivityBtn from '../components/NewActivityBtn';
import { GlobalStyles } from '../styles/GlobalStyles';


const ActivityScreen = ({ navigation }) => {
    const [activities, setActivities] = useState([
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
    ])

    return (
        <View style={GlobalStyles.container}>
            <Title title='Activities' />
            <FlatList style={styles.list}
                contentContainerStyle={{}}
                data={activities}
                renderItem={(obj) => {
                    return (
                        <Card navigation={navigation}
                            name={obj.item.name}
                            area={obj.item.area}
                            date={obj.item.date} />
                    )
                }}
                keyExtractor={activities => activities.id} />

            <NewActivityBtn navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
    }
})

export default ActivityScreen;