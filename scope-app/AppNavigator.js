import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import NavigationBar from './components/NavigationBar';


const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='LoginScreen'>
        <Screen name="LoginScreen" component={ LoginScreen } options={{headerShown:false}}></Screen>
        <Screen name="NavigationBar" component={ NavigationBar } options={{headerShown:false}}></Screen>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator