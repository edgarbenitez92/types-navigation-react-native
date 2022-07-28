import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

  // const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: 20
      // marginTop: insets.top * 20
    }}>
      <Text style={styles.titleScreen}>
        Settings Screen
      </Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favoriteIcon
        &&
        <Icon
          name={authState.favoriteIcon}
          size={150}
          color={colors.primary}
        >
        </Icon>
      }

    </View>
  )
}
