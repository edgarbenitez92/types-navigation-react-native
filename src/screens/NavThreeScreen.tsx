import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const NavThreeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titleScreen}>NavThreeScreen</Text>

      <Button
        title='Go Back'
        onPress={() => navigation.pop()}
      />

      <Button
        title='Go Home'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
