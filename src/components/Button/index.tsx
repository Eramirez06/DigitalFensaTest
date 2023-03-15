import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface IButtonProps {
  onPress: () => void;
  text: string;
  customStyle?: any;
}

const Button: FC<IButtonProps> = ({onPress, text, customStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, customStyle]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
