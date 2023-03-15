import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import Theme from 'theme';

interface ILoadingProps {
  isLoading: boolean;
  color: string;
}

const Loading: FC<ILoadingProps> = ({isLoading, color}) => {
  if (isLoading) {
    return <ActivityIndicator size="large" color={color} />;
  }
  return null;
};

Loading.defaultProps = {
  color: Theme.colors.primary,
};

export default Loading;
