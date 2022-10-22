import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import HeaderBar from "../../components/HeaderBar";
import { auth } from "../../firebase";

export default function SettingsScreen(props) {

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() =>{
      props.navigation.replace("LoginScreen")
    })
    .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <SafeAreaView style={styles.button}>
        <TouchableOpacity onPress={handleSignOut} style={styles.signOut}>
          <Text style={[styles.textSign, { color: "black" }]}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alightItems: "center",
    marginTop: 50,
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
