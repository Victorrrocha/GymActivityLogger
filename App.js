import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ActivityScreen from './screens/ActivityScreen'
import NewActivityScreen from './screens/NewActivityScreen';
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
      <Stack.Navigator>
        <Stack.Screen name="ActivityScreen"
                      component={ActivityScreen}
                      options={statusbar_style}/>
         <Stack.Screen name="New Activity"
                      component={NewActivityScreen}
                      options={ {...statusbar_style, title: 'New Activity'} }/>             
      </Stack.Navigator>
    </NavigationContainer>
  );
}
