import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

import HeaderBar from "../../components/HeaderBar";
import { auth } from "../../firebase";

export default function MoreScreen(props) {
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() =>{
      props.navigation.replace("LoginScreen")
    })
    .catch(error => alert(error.message))
  }

  const logoutAlert = () =>
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
  const showAlert = () =>
    Alert.alert(
      "Confirm Action",
      "Are you sure you want to do this?",
      [
        {
          text: "Yes",
          onPress: () => Alert.alert("Scheduled Successfully"),
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
      <SafeAreaView style={styles.header}>
      <HeaderBar />
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <TouchableOpacity onPress={showAlert} style={styles.more}>
          <Text style={[styles.textSign, { color: "black" }]}>
            Yearly Reschedule
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <TouchableOpacity style={styles.more}>
          <Text style={[styles.textSign, { color: "black" }]}>
            Settings
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <TouchableOpacity onPress={logoutAlert} style={styles.more}>
          <Text style={[styles.textSign, { color: "black" }]}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 30 },
  button: {
    alightItems: "center",
    margin: 50,
  },
  more: {
    width: "100%",
    height: 50,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  header: {
    marginBottom:50,
  },

});
