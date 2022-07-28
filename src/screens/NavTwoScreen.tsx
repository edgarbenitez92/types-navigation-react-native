import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

export const NavTwoScreen = ({ navigation }: Props) => {

  const navigator = useNavigation(); // Otra forma de navegación nativa de React

  // Mayor utilidad para iOS
  // useEffect(() => {
  //   navigator.setOptions({
  //     title: 'Im in Page 2',
  //     headerBackTitle: 'Atras'
  //   })
  // }, []);


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titleScreen}>NavTwoScreen</Text>

      <Button
        title='Go To Page 3'
        onPress={() => navigation.navigate('NavThreeScreen')}
      />
    </View>
  )
}
