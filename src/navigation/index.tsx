import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Root from 'navigation/navigators/Root';

import {navigationRef} from 'utils/navigationHandler';

const Navigator: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Root />
    </NavigationContainer>
  );
};

export default Navigator;
