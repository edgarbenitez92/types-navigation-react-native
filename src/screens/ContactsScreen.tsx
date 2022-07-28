import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {

  const { authState, signIn, logout } = useContext(AuthContext);


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titleScreen}>
        ContactsScreen
      </Text>

      {
        !authState.isLoggedIn
          ? <Button title='SignIn' onPress={signIn} />
          : <Button title='SignOut' onPress={logout} />
      }
    </View>
  )
}
