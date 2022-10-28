import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";

import HeaderBar from "../../components/HeaderBar";

export default function SettingsScreen(props) {

  const goBack = () => {
    props.navigation.navigate("MoreScreen")
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />

      <SafeAreaView style={styles.section}>
        <SectionBar name="General Settings" />
      </SafeAreaView>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 30 },
  box: {
    marginTop: 15,
    backgroundColor: "#ADD8E6",
    paddingLeft: 10,
    marginLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
});
