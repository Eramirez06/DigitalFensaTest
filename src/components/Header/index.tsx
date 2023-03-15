import React, {FC} from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

interface IHeaderProps {
  title: string;
  subTitle?: string;
  customStyle?: ViewStyle;
  customHeaderStyle?: ViewStyle;
}

const Header: FC<IHeaderProps> = ({
  title,
  subTitle,
  customStyle,
  customHeaderStyle,
}) => {
  return (
    <SafeAreaView style={customHeaderStyle} edges={['right', 'top', 'left']}>
      <View style={[styles.headerContainer, customStyle]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
