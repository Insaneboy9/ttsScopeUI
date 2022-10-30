import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { React, useState, useEffect } from "react";
import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";
import {  Agenda } from "react-native-calendars";
import { firestore } from "../../firebase";

function toDateTime(secs) {
  var t = new Date(1, 1, 1);
  t.setSeconds(secs);
  let year = 2022;
  let month = t.getMonth();
  let day = t.getDate();
  return year + "-" + less10(month) + "-" + less10(day);
}
function less10(time) {
  return time < 10 ? "0" + time : time;
}
export default function HomeScreen(props) {

  const goFullSchedule = () => {
    props.navigation.navigate("FullScheduleScreen");
  };

  const [scope, setScope] = useState([]);
  const [jsonObj, setJsonObj] = useState({})

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  async function getScope() {
    var json = {}
    const snapshot = await firestore().collection("event").get();
    setScope(snapshot.docs.map(doc => doc.data()))
    if (scope.length>=0){
      for (let i=0; i<scope.length; i++){
        if (json[toDateTime(scope[i]["Wash_Date"])] != null){
          json[toDateTime(scope[i]["Wash_Date"])].push({name: scope[i].Scope})
        }else{
        json[toDateTime(scope[i]["Wash_Date"])] = [{name: scope[i].Scope}]
      }
      }
    }
    console.log(json)
    return json
  }

  console.log("render")


  useEffect(() => {
    getScope().then((json)=> setJsonObj(json))}, [] //need refresh to get data, dk why still

    // setJsonObj({"2022-10-28": [{"name": "This_is_positive_RgbsdWfdGdfg"}, {"name": "cluVvyysHJKv3oiUTo5U"}], "2022-11-03": [{"name": "SfbEfdbkJjida"}, {"name": "FewgwDghHdfthdg"}, {"name": "MegEEghEPPP"}], "2022-11-08": [{"name": "FrdfhGhtRhtWtr"}], "2022-11-09": [{"name": "QfbssdvKdsafgwr"}, {"name": "EqetFdsDfdhGfd"}, {"name": "QkbeLcdafnP"}, {"name": "EdssDSGHGdgwDSF"}], "2022-11-10": [{"name": "VngfhgRgrEgn"}, {"name": "WreeFojpBfgGfde"}, {"name": "RsdwwqTiiukJfeg"}, {"name": "DHYasdfgFGFJh"}], "2022-11-11": [{"name": "FberBgfnEfbHwrg"}, {"name": "FuoEilBjhlOrdg"}, {"name": "TthRterhEbhkj"}], "2022-11-12": [{"name": "SfdDgBfjfSHfsfJfCfs"}]})},[]
  )
  

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <SafeAreaView style={styles.section}>
        <SectionBar name="WEEKLY SCHEDULE" />
      </SafeAreaView>

      <SafeAreaView>
        <Text>{scope.Scope}</Text>
      </SafeAreaView>

      <Agenda
        items={jsonObj}
        renderItem={(item, isFirst) => (
          <ScrollView>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      />

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
  button: { margin: 50 },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    marginTop: 20,
  },
  itemText: {
    color: "#888",
    fontSize: 16,
  },
});
