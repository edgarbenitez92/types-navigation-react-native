import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavOneScreen } from '../screens/NavOneScreen';
import { NavThreeScreen } from '../screens/NavThreeScreen';
import { NavTwoScreen } from '../screens/NavTwoScreen';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
  NavOneScreen: undefined;
  NavTwoScreen: undefined;
  NavThreeScreen: undefined;
  PersonScreen: { id: number; name: string };
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='NavTwoScreen'
      screenOptions={{
        headerStyle: {
          elevation: 0, // Android
          // shadowColor: 'transparent' iOS
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="NavOneScreen" options={{ title: " Page 1" }} component={NavOneScreen} />
      <Stack.Screen name="NavTwoScreen" options={{ title: "Page 2" }} component={NavTwoScreen} />
      <Stack.Screen name="NavThreeScreen" options={{ title: "Page 3" }} component={NavThreeScreen} />
      <Stack.Screen name="PersonScreen" options={{ title: "Person Page" }} component={PersonScreen} />
    </Stack.Navigator>
  );
}