import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

import HeaderBar from "../../components/HeaderBar";
import { auth } from "../../firebase";

export default function LogoutScreen(props) {

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() =>{
      props.navigation.replace("LoginScreen")
    })
    .catch(error => alert(error.message))
  }

  const showAlert = () =>
  Alert.alert(
    "Confirm Action",
    "Are you sure you want to do this?",
    [
    {
            text: "Yes",
            onPress: () => handleSignOut(),
            style: "Yes",
          },
      {
        text: "No",
        onPress: () => Alert.alert("Action Cancelled Successfully"),
        style: "No",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <SafeAreaView style={styles.button}>
        <TouchableOpacity onPress={showAlert} style={styles.signOut}>
          <Text style={[styles.textSign, { color: "black" }]}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alightItems: "center",
    margin: 50,
    marginTop:250,
  },
  signOut: {
    width: "100%",
    height: 50,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
