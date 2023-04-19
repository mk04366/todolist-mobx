import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/home';

import {Routes} from './constants';

const AppStack = createStackNavigator();

export const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={Routes.HOME} component={Home} />
      {/* <AppStackRoutes.Screen name="Details" component={Details} /> */}
    </AppStack.Navigator>
  );
};

const RootStack = createStackNavigator();

export const RootRoutes = () => {
  return (
    <RootStack.Navigator
      initialRouteName={Routes.APP_ROUTES}
      screenOptions={{headerShown: false}}>
      {/* <RootStack.Screen name="welcome" component={welcome} />
          <RootStack.Screen name="login" component={login} /> */}
      <RootStack.Screen name={Routes.APP_ROUTES} component={AppRoutes} />
    </RootStack.Navigator>
  );
};
