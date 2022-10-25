import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import React from "react";
import HeaderBar2 from "../../components/HeaderBar2";

export default function ScopeDetailsScreen(props) {
  const goRepair = () => {
    props.navigation.navigate("RepairScreen", {scope});
  };
  const goWash = () => {
    props.navigation.navigate("WashScreen", {scope});
  };
  const goSample = () => {
    props.navigation.navigate("SampleScreen", {scope});
  };

  const scope = {
    'brand' : 'Fujinon',
    'type'  : 'OGD',
    'model' : 'EG 760',
    'serial': '5GA4SGA',
    'status': 'regular' 
  }

  const keys = []
  const vals = []

  for (const [key, val] of Object.entries(scope)) {
    keys.push(key)
    vals.push([val])
  }

  return (
    <SafeAreaView>
      <HeaderBar2 navigation={props.navigation} />
      <SafeAreaView>
        <View style={styles.box}>
          <Text style={styles.text_header}>SCOPE DETAILS</Text>
        </View>
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}>
            <Row
              data={["Field", "Detail"]}
              flexArr={[1, 3]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={keys}
                style={styles.title}
                heightArr={[28, 28, 28, 28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={vals}
                flexArr={[1, 2]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
      </SafeAreaView>
      <View style={styles.section}>
        <SafeAreaView style={styles.button}>
          <Button title="REPAIR" onPress={goRepair} />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button title="WASH" onPress={goWash} />
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <Button title="SAMPLE" onPress={goSample} />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 200,
    padding: "2%",
  },
  button: {
    margin: "2%",
  },
  box: {
    marginTop: "1%",
    justifyContent: "center",
    marginHorizontal: "2%",
    height: 50,
    backgroundColor: "#ADD8E6",
  },
  text_header: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 24,
  },
  container: {
    flex: 1,
    marginHorizontal: "2%",
    marginTop: "1%",
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  wrapper: {
    flexDirection: "row",
  },
  title: {
    flex: 1,
    backgroundColor: "#f6f8fa",
  },
  row: { height: 28 },
  text: { textAlign: "center" },
});
