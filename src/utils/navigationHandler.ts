import {createNavigationContainerRef} from '@react-navigation/native';
import {AllRoutes} from 'navigation/types';

export const navigationRef = createNavigationContainerRef<AllRoutes>();

/**
 * use this to navigate to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export const navigate = <TRouteName extends keyof AllRoutes>(
  name: TRouteName,
  params?: Object,
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};
