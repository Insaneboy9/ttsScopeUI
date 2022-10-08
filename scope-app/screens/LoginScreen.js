import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

function LoginScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.text_header}> TTSH Endoscope Scheduler</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <SafeAreaView style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
          />
          {/* <Feather name="check-circle" color="green" size={20} /> */}
        </SafeAreaView>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <SafeAreaView style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
          />
          {/* <Feather name="eye-off" color="grey" size={20} /> */}
        </SafeAreaView>

        <SafeAreaView style={styles.button}>
          <LinearGradient colors={["#ADD8E6", "#ADD8E6"]} style={styles.signIn}>
            <Text style={[styles.textSign, { color: "black" }]}>Log In</Text>
          </LinearGradient>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flex: 0.25,
    justifyContent: "flex-end",
    backgroundColor: "#ADD8E6",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  footer: {
    flex: 3,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop:50,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,

    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alightItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
