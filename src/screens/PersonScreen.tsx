import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// Formas de type de rutas

// interface RouterParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> { }

export const PersonScreen = ({ navigation, route }: Props) => {

  // const params = route.params as RouterParams;
  const params = route.params;
  const { name } = params;

  const { changeUserName } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: name
    })
  }, [])

  useEffect(() => {
    changeUserName(name);
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titleScreen}>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  )
}
