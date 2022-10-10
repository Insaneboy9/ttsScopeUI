import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SeniorNavigation from './components/SeniorNavigation';
import JuniorNavigation from './components/JuniorNavigation';


const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='LoginScreen'>
        <Screen name="LoginScreen" component={ LoginScreen } options={{headerShown:false}}></Screen>
        <Screen name="SeniorNavigation" component={ SeniorNavigation } options={{headerShown:false}}></Screen>
        <Screen name="JuniorNavigation" component={ JuniorNavigation } options={{headerShown:false}}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator