import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderBar2 from "../../components/HeaderBar2";

export default function ScopeDetailsScreen(props) {
  const goRepair = () => {
    props.navigation.navigate("RepairScreen");
  };
  const goWash = () => {
    props.navigation.navigate("WashScreen");
  };
  const goSample = () => {
    props.navigation.navigate("SampleScreen");
  };
  return (
    <SafeAreaView>
      <HeaderBar2 navigation={props.navigation} />
      <SafeAreaView style={styles.box}>
        <Text>SCOPE DETAILS</Text>
        <Text>wf</Text>
        <Text>fewfew</Text>
        <Text>fwefew</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.section}>
        <Button title="REPAIR" onPress={goRepair} />
      </SafeAreaView>
      <SafeAreaView style={styles.section}>
        <Button title="WASH" onPress={goWash} />
      </SafeAreaView>
      <SafeAreaView style={styles.section}>
        <Button title="SAMPLE" onPress={goSample} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 30,
  },
  box:{
    marginTop:50,
    backgroundColor: "#ADD8E6",
  }
});
