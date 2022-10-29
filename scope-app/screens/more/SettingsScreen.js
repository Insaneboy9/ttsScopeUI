import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";

import HeaderBar2 from "../../components/HeaderBar2";
import SectionBar from "../../components/SectionBar"

export default function SettingsScreen(props) {


  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar2 navigation={props.navigation}/>

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
