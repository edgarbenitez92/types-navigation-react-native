import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const TabThreeScreen = () => {

  useEffect(() => {
    console.log('tabThreeScreen')
  }, []);

  return (
    <View>
      <Text>TabThreeScreen</Text>
    </View>
  )
}
