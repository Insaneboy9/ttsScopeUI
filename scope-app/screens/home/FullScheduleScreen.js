import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";
import { Table, Row, Rows } from "react-native-table-component";
import HeaderBar2 from "../../components/HeaderBar2";
import SectionBar from "../../components/SectionBar";

const tableHead = ["Brand", "Model No.", "Serial No."];
const tableData = [
  ["1", "2", "3"],
  ["a", "b", "c"],
  ["1", "2", "3"],
  ["a", "b", "c"],
  ["1", "2", "3"],
];

export default function FullScheduleScreen(props) {
  const goFourWeekly = () => {
    props.navigation.navigate("FourWeeklyScreen");
  };

  const goTwelveWeekly = () => {
    props.navigation.navigate("TwelveWeeklyScreen");
  };

  return (
    <SafeAreaView>
      <HeaderBar2 navigation={props.navigation} />
      <SafeAreaView style={styles.section}>
        <SectionBar name="4 WEEKLY SCHEDULE" />
      </SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <Table
          borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
          style={styles.table}
        >
          {/* if textStyle got problem, edit textStyle in row.js  */}
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
        <SafeAreaView style={styles.button}>
          <Button title="VIEW" onPress={goFourWeekly} />
          <View style={styles.space} />
          <Button title="VIEW" onPress={goFourWeekly} />
          <View style={styles.space} />
          <Button title="VIEW" onPress={goFourWeekly} />
          <View style={styles.space} />
          <Button title="VIEW" onPress={goFourWeekly} />
          <View style={styles.space} />
          <Button title="VIEW" onPress={goFourWeekly} />
        </SafeAreaView>
      </View>

      <SafeAreaView style={styles.section}>
        <SectionBar name="12 WEEKLY SCHEDULE" />
      </SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <Table
          borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
          style={styles.table}
        >
          {/* if textStyle got problem, edit textStyle in row.js  */}
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
        <SafeAreaView style={styles.button}>
          <Button title="VIEW" onPress={goTwelveWeekly} />
          <View style={styles.space} />
          <Button title="VIEW" onPress={goTwelveWeekly} />
          <View style={styles.space} />
          <Button title="VIEW" onPress={goTwelveWeekly} />
          <View style={styles.space} />
          <Button title="VIEW" onPress={goTwelveWeekly} />
          <View style={styles.space} />
          <Button title="VIEW" onPress={goTwelveWeekly} />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 5, marginTop: 10, marginBottom: 10 },
  table: { margin: 10, marginTop: 15, width: "75%" },
  section: { marginTop: 10 },
  button: {
    width: "15%",
    height: 36,
    marginTop: 58,
    marginVertical: 4,
    //                marginBottom: 2,
    //                flex:1
  },
  space: {
    width: 5, // or whatever size you need
    height: 7,
  },
});
