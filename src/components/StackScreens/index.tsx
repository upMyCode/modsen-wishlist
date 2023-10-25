import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '@screens/RegistrationScreen';
import type { StackScreensParamList } from '@src/types/screenNavigation';
import React from 'react';

const Stack = createStackNavigator<StackScreensParamList>();

export default function StackScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignUpScreen"
      >
        <Stack.Screen name="SignUpScreen" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
