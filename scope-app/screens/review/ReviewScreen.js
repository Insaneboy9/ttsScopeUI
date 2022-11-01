import { SafeAreaView, StyleSheet, View, Text, Button, SectionList } from "react-native";
import React, { useEffect, useState } from "react";

import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";
import { firestore } from "../../firebase";

export default function ReviewScreen() {
  
  const [scope, setScope] = useState([])
  const [table, setTable] = useState([])

  function processScope() {
      console.log(scope)
      setTable([
        {
          'title': 'For review',
          'data': [scope.name]
        }
      ])
      console.log('scoppe')
      console.log(table)

  }
  async function getScope() {
    console.log('Getting Scope Data from Firebase here')
    firestore()
      .collection("scope")
      .get()
      .then((scopeInstance) => {
        setScope(scopeInstance.docs.map((doc) => doc.data()));
      });
  }
   
  useEffect(() => {
    getScope()
  }, [])

  useEffect(() => {
    processScope()
  }, [scope])

  const Card = ({ data }) => (
    <SafeAreaView style={styles.item}>
     <SafeAreaView style={styles.box}>
        <Text>BRAND: {data.brand}</Text>
        <Text>SCOPE TYPE: BRONCHOSCOPE</Text>
        <Text>MODEL NO.: BFP 190 (602)</Text>
        <Text>SERIAL NO.: 2912702</Text>
        <SafeAreaView style={styles.button}>
        <Button title="Review" color="#80BDE3" />
        </SafeAreaView> 
      </SafeAreaView>
    </SafeAreaView>
  );
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const GenerateCard = ({data}) => {
    console.log('data')
    console.log(data)
    if (data.length != 0){
      console.log("Generated")
      return (
        <SectionList
          sections={table}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={data} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <SafeAreaView style={styles.section}>
        <SectionBar name="PENDING APPROVAL" />
      </SafeAreaView>
      <SafeAreaView>
        <GenerateCard data={scope} ></GenerateCard>
      </SafeAreaView>
      {/* <SafeAreaView style={styles.box}>
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
      </SafeAreaView> */}
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
