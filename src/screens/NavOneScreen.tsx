import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }
// interface Props extends DrawerScreenProps<any, any> { }



export const NavOneScreen = ({ navigation }: Props) => {

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button
  //         title='Menú'
  //         onPress={() => navigation.toggleDrawer}
  //       />
  //     )
  //   });
  // }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titleScreen}>NavOneScreen</Text>

      <Button
        title='Go to Page 2'
        onPress={() => navigation.navigate('NavTwoScreen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5
      }}>
        Navigate with Arguments
      </Text>

      <View style={{
        flexDirection: 'row',
      }}>

        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Squall'
          })}
        >
          <Text style={styles.bigButtonLabel}>Squall</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 2,
            name: 'Quistis'
          })}
        >
          <Text style={styles.bigButtonLabel}>Quistis</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
