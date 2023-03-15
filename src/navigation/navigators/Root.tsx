import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, HomeScreen} from 'screens';

export interface IRootRoutes {
  Home: undefined;
  Details: {transactionId: string};
}

const Stack = createNativeStackNavigator();

const Root: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Root;
