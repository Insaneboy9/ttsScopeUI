import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IonicIcon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/home/HomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import BarcodeScannerScreen from "../screens/barcode/BarcodeScannerScreen";
import ScopeDetailsScreen from "../screens/barcode/ScopeDetailsScreen";
import WashScreen from "../screens/barcode/WashScreen";
import RepairScreen from "../screens/barcode/RepairScreen";
import SampleScreen from "../screens/barcode/SampleScreen";


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const BarcodeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return(
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeScreen" component= {HomeScreen} options={{ headerShown: false }} />
  </HomeStack.Navigator>
  )
}

const BarcodeStackScreen = () => {
  return(
  <BarcodeStack.Navigator>
    <BarcodeStack.Screen name= "BarcodeScreen" component= {BarcodeScannerScreen} options={{ headerShown: false }} />
    <BarcodeStack.Screen name= "ScopeDetailsScreen" component={ScopeDetailsScreen} options={{ headerShown: false }} />
    <BarcodeStack.Screen name= "RepairScreen" component={RepairScreen} options={{ headerShown: false }} />
    <BarcodeStack.Screen name= "SampleScreen" component={SampleScreen} options={{ headerShown: false }} />
    <BarcodeStack.Screen name= "WashScreen" component={WashScreen} options={{ headerShown: false }} />
  </BarcodeStack.Navigator>
  )
}

const SettingsStackScreen = () => {
  return(
  <SettingsStack.Navigator>
    <SettingsStack.Screen name= "SettingsScreen" component= {SettingsScreen} options={{ headerShown: false }} />
  </SettingsStack.Navigator>
  )
}

export default function JuniorNavigation() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "lightblue",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {fontSize : 16},
          tabBarStyle: [{display: "flex"}],
          tabBarIcon: ({ focused, color, size, padding }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            }  else if (route.name === "Barcode") {
              iconName = focused ? "barcode" : "barcode-outline";
            }  else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }
            
            return (
              <IonicIcon
                name={iconName}
                size={size}
                color={color}
                style={{ paddingBottom: padding }}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Barcode"
          component={BarcodeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
