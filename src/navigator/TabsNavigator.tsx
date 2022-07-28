import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { TabOneScreen } from '../screens/TabOneScreen';
// import { TabTwoScreen } from '../screens/TabTwoScreen';

import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

export const TabsNavigator = () => {

  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, focused }) => {

            let iconName: string = '';

            switch (route.name) {
              case 'TabOneScreen':
                iconName = 'megaphone-outline';
                break;

              case 'TabTwoScreen':
                iconName = 'trophy-outline';
                break;

              case 'StackNavigator':
                iconName = 'camera-outline';
                break;
            }

            return <Icon name={iconName} size={20} color={color} />;
            // return <Text style={{ color }}>{iconName}</Text>
          },
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            borderTopColor: 'red',
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarLabelStyle: {
            fontSize: 15
          }
        })
      }
    >
      <BottomTabAndroid.Screen name="TabOneScreen" options={{ title: 'Tab1' }} component={TabOneScreen} />
      {/* <BottomTabAndroid.Screen name="TabTwoScreen" options={{ title: 'Tab2' }} component={TabTwoScreen} /> */}
      <BottomTabAndroid.Screen name="TabTwoScreen" options={{ title: 'TopTab' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {

            let iconName: string = '';

            switch (route.name) {
              case 'TabOneScreen':
                iconName = 'megaphone-outline';
                break;

              case 'TabTwoScreen':
                iconName = 'trophy-outline';
                break;

              case 'StackNavigator':
                iconName = 'camera-outline';
                break;
            }

            return <Icon name={iconName} size={20} color={color} />;
            // return <Text style={{ color }}>{iconName}</Text>
          },
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            borderTopColor: 'red',
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarLabelStyle: {
            fontSize: 15
          }
        })
      }
    >
      {/* <Tab.Screen name="TabOneScreen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={TabOneScreen} /> */}
      <BottomTabIOS.Screen name="TabOneScreen" options={{ title: 'Tab1' }} component={TabOneScreen} />
      {/* <BottomTabAndroid.Screen name="TabTwoScreen" options={{ title: 'Tab2' }} component={TabTwoScreen} /> */}
      <BottomTabAndroid.Screen name="TabTwoScreen" options={{ title: 'TopTab' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}