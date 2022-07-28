import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TabsNavigator } from './TabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const SidebarNavigator = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front'
      }}
      drawerContent={(props) => <ContentMenu {...props} />}
    >
      <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const ContentMenu = ({ navigation }: DrawerContentComponentProps) => {

  return (

    <DrawerContentScrollView>

      {/* Avatar container */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/fc/04/61/fc0461e35ec3e68476a81022938aa964.jpg'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={{
          ...styles.menuButton,
          flexDirection: 'row'
        }}
        >
          <Text>
            <Icon name='compass-outline' size={20} color='black' />
          </Text>
          <Text
            style={styles.menuItem}
            // onPress={() => navigation.navigate('StackNavigator')}
            onPress={() => navigation.navigate('TabsNavigator')}
          > Stack Navigation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Text
            style={styles.menuItem}
            onPress={() => navigation.navigate('SettingsScreen')}
          >
            <Icon name='cog-outline' size={20} color='black' /> Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}