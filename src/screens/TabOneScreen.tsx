import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const TabOneScreen = () => {

  useEffect(() => {
    console.log('tabOneScreen')
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titleScreen}>
        Icons
      </Text>

      <Text>
        <TouchableIcon name="airplane-outline" />
        <TouchableIcon name="bluetooth-outline" />
        <TouchableIcon name="attach-outline" />
        <TouchableIcon name="barbell-outline" />
      </Text>
    </View>
  )
}
