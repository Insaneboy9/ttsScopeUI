import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";
import React from "react";
import { Table, Row, Rows } from "react-native-table-component";

import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";

const tableHead = ["Head", "Head2", "Head3", "Head4", "Head5"];
const tableData = [
  ["1", "2", "3", "4", "5"],
  ["a", "b", "c", "d", "5"],
  ["1", "2", "3", "456\n789", "5"],
  ["a", "b", "c", "d", "5"],
  ["1", "2", "3", "4", "5"],
];

export default function HomeScreen(props) {

  const goFullSchedule = () => {
    props.navigation.navigate("FullScheduleScreen")
  }
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <SafeAreaView style={styles.section}>
        <SectionBar name="WEEKLY SCHEDULE" />
      </SafeAreaView>
      <Table
        borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
        style={styles.table}
      >
        {/* if textStyle got problem, edit textStyle in row.js  */}
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
      <SafeAreaView style={styles.button}>
        <Button title="VIEW FULL SCHEDULE" onPress={goFullSchedule} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  table: { marginTop: 25 },
  section: { marginTop: 30 },
  button: { margin:50,}
});
