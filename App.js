import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ActivityScreen from './screens/ActivityScreen'
import NewActivityScreen from './screens/NewActivityScreen';
import ExerciseLoggerScreen from './screens/ExerciseLoggerScreen';
import HistoryScreen from './screens/HistoryScreen';
import Header from './components/Header';

const Stack = createStackNavigator()

const statusbar_style = {
  title: "Gym Logger",
  headerStyle: {
    backgroundColor: '#46E89C'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
          cardStyle: { backgroundColor: '#434343' }
        }}
      >
        <Stack.Screen name="ActivityScreen"
          component={ActivityScreen}
          options={statusbar_style} />
        <Stack.Screen name="New Activity"
          component={NewActivityScreen}
          options={{ ...statusbar_style, title: 'New Activity' }} />
        <Stack.Screen name="ExerciseLogger"
          component={ExerciseLoggerScreen}
          options={statusbar_style} />
         <Stack.Screen name="History"
          component={HistoryScreen}
          options={statusbar_style} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
