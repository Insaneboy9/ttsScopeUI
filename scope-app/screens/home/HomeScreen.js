import { StyleSheet, Text, SafeAreaView, ScrollView,View, Button ,TouchableOpacity} from "react-native";
import {React, useState,useEffect} from "react";
import { Table, Row, Rows } from "react-native-table-component";
import HeaderBar from "../../components/HeaderBar";
import SectionBar from "../../components/SectionBar";
import * as dayjs from 'dayjs';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { firestore ,db} from '../../firebase';


function toDateTime(secs) {
    var t = new Date(1, 1, 1);
    t.setSeconds(secs);
    let year=2022;
    let month=t.getMonth();
    let day=t.getDate()
    return year+"-"+less10(month)+"-"+less10(day);
}
function less10(time){
  return time<10 ? "0"+time :time;
}
export default function HomeScreen(props) {

  const goFullSchedule = () => {
    props.navigation.navigate("FullScheduleScreen")
  }
/////////////////////////////////////////////////////////////////
  const [scope, setscope] = useState({});
  async function getScope() {
    return firestore()
      .collection("event")
      .where('Document ID','!=','')
      .get()
      .then(querySnapshot => {
          console.log('Total U: ', querySnapshot.size);

          querySnapshot.forEach(documentSnapshot => {
            console.log('User ID:  ', documentSnapshot.id, documentSnapshot.data());
          });
        });

  }
  getScope().then(scopeInstance => {
      const scopedata = scopeInstance.data()
      console.log(scopedata)
      setscope(scopedata)

    })
  const keys = [];
  const vals = [];
  for (const [key, val] of Object.entries(scope)) {
    console.log(scope)
    keys.push(key);
    vals.push([val]);
  }
const washDate=toDateTime(scope.Wash_Date)
console.log(scope)
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

                  items={{
                    washDate: [{name: scope.Scope}, {name: 'Walking'}, {name: 'Running'}],
                    '2022-12-04': [{name: 'Writing'}],
                    '2022-12-05': [{name: 'Cycling'}, {name: 'Walking'}, {name: 'Running'}],
                    '2022-12-06': [{name: 'Writing', height: 80}]
                  }}

                  renderItem={(item, isFirst) => (
                  <ScrollView>
                    <TouchableOpacity style={styles.item}>
                      <Text style={styles.itemText}>{item.name}</Text>
                    </TouchableOpacity>
                  </ScrollView>
                  )
                  }
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
  button: { margin:50,},
  item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 15,
      padding: 10,
      marginRight: 10,
      marginTop: 20,
    },
    itemText: {
      color: '#888',
      fontSize: 16,
    }
});
