import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='LoginScreen'>
        <Screen name="LoginScreen" component={ LoginScreen } options={{headerShown:false}}></Screen>
        <Screen name="HomeScreen" component={ HomeScreen } options={{headerShown:false}}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator