import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
import React from "react";

import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";

export default function ReviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <SafeAreaView style={styles.section}>
        <SectionBar name="PENDING APPROVAL" />
      </SafeAreaView>
      <SafeAreaView style={styles.box}>
        <Text>BRAND: OLYMPUS</Text>
        <Text>SCOPE TYPE: BRONCHOSCOPE</Text>
        <Text>MODEL NO.: BFP 190 (602)</Text>
        <Text>SERIAL NO.: 2912702</Text>
        <SafeAreaView style={styles.button}>
        <Button title="Review" color="#80BDE3" />
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.box}>
        <Text>BRAND: OLYMPUS</Text>
        <Text>SCOPE TYPE: BRONCHOSCOPE</Text>
        <Text>MODEL NO.: BFP 190 (602)</Text>
        <Text>SERIAL NO.: 2912702</Text>
        <SafeAreaView style={styles.button}>
        <Button title="Review" color="#80BDE3" />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 30 },
  box: {
    marginTop: 15,
    backgroundColor: "#ADD8E6",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    margin:10,
    marginTop: 20
  }
});
