import React, {useState} from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import HeaderBar from "../components/HeaderBar";

function LoginScreen(props) {

  const [userDetail, setUserDetail] = useState('');

  const login = () => {
    if (userDetail.text === 'admin'){
      props.navigation.navigate("JuniorNavigation")
    } else {
    props.navigation.navigate("SeniorNavigation")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />

      <SafeAreaView style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <SafeAreaView style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(text) => setUserDetail({text})}
          />
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
        </SafeAreaView>

        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress= {login} style={styles.signIn}>
            <Text style={[styles.textSign, { color: "black" }]}>Log In</Text>
            </TouchableOpacity>
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
  footer: {
    flex: 3,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop:50,
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    backgroundColor: "#ADD8E6",
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
