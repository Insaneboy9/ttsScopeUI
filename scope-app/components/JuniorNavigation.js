import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import BarcodeScannerScreen from "../screens/BarcodeScannerScreen";

const Tab = createBottomTabNavigator();

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
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Barcode"
          component={BarcodeScannerScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
