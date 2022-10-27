import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcon from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/home/HomeScreen";
import LogoutScreen from "../screens/settings/LogoutScreen";
import BarcodeScannerScreen from "../screens/barcode/BarcodeScannerScreen";
import ReviewScreen from "../screens/review/ReviewScreen";
import ScopeDetailsScreen from "../screens/barcode/ScopeDetailsScreen";
import WashScreen from "../screens/barcode/WashScreen";
import RepairScreen from "../screens/barcode/RepairScreen";
import SampleScreen from "../screens/barcode/SampleScreen";
import FullScheduleScreen from "../screens/home/FullScheduleScreen";
import FourWeeklyScreen from "../screens/home/FourWeeklyScreen";
import TwelveWeeklyScreen from "../screens/home/TwelveWeeklyScreen";
import MoreScreen from "../screens/more/MoreScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ReviewStack = createNativeStackNavigator();
const BarcodeStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return(
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeScreen" component= {HomeScreen} options={{ headerShown: false }} />
    <HomeStack.Screen name= "FullScheduleScreen" component= {FullScheduleScreen} options={{ headerShown: false }} />
    <HomeStack.Screen name= "FourWeeklyScreen" component= {FourWeeklyScreen} options={{ headerShown: false }} />
    <HomeStack.Screen name= "TwelveWeeklyScreen" component= {TwelveWeeklyScreen} options={{ headerShown: false }} />
  </HomeStack.Navigator>
  )
}

const ReviewStackScreen = () => {
  return(
  <ReviewStack.Navigator>
    <ReviewStack.Screen name="ReviewScreen" component= {ReviewScreen} options={{ headerShown: false }} />
  </ReviewStack.Navigator>
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

const MoreStackScreen = () => {
  return(
  <MoreStack.Navigator>
    <MoreStack.Screen name="MoreScreen" component= {MoreScreen} options={{ headerShown: false }} />
    {/* <MoreStack.Screen name="LabScreen" component= {LabResultScreen} options={{ headerShown: false }} />
    <MoreStack.Screen name="RescheduleScreen" component= {RescheduleScreen} options={{ headerShown: false }} />
    <MoreStack.Screen name="SuccessScreen" component= {SuccessScreen} options={{ headerShown: false }} /> */}
  </MoreStack.Navigator>
  )
}

const SettingsStackScreen = () => {
  return(
  <SettingsStack.Navigator>
    <SettingsStack.Screen name= "LogoutScreen" component= {LogoutScreen} options={{ headerShown: false }} />
  </SettingsStack.Navigator>
  )
}

export default function SeniorNavigation() {
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
            } else if (route.name === "Review") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Barcode") {
              iconName = focused ? "barcode" : "barcode-outline";
            } else if (route.name === "More") {
              iconName = focused ? "md-ellipsis-horizontal" : "md-ellipsis-horizontal-outline";
            } else if (route.name === "Logout") {
              iconName = focused ? "exit" : "exit-outline";
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
          name="Review"
          component={ReviewStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Barcode"
          component={BarcodeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="More"
          component={MoreStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Logout"
          component={SettingsStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
