import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface IconProps {
  name: string;
}

export const TouchableIcon = ({ name }: IconProps) => {

  const { changeFavoriteIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={() => changeFavoriteIcon(name)}
    >
      <Icon
        name={name}
        size={50}
        color="#900" />
    </TouchableOpacity>
  )
}
