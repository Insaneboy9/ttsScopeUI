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
    const [scope, setscope] = useState([]);
    const getScope=async()=>{
                       const response=db.collection('event');
                        const data=await response.get();
                         data.docs.forEach(item=>{
                         setscope([...scope,item.data()])
                                           })
                        }
                        useEffect(() => {
                             getScope();
                           }, [])

  const goFullSchedule = () => {
    props.navigation.navigate("FullScheduleScreen")
  }


  return (
     <SafeAreaView style={styles.container}>
      <HeaderBar />
      <SafeAreaView style={styles.section}>
        <SectionBar name="WEEKLY SCHEDULE" />
      </SafeAreaView>

        <SafeAreaView>
                  {
                    scope && scope.map(scopes=>{
                    const WashDate=toDateTime(scopes.Wash_Date)
                    const name=scopes.Scope
                      return(
//                            <Text>{ scopes.Scope}</Text>
//                            <Text>{ scope.Scope}</Text>
                         <Text>''+{ WashDate}+""{name}</Text>
                      )
                    })
                  }</SafeAreaView>
      <Agenda

                  items={{
                    WashDate:[{name:'ddd'},{name:'sss'}],
                    '2022-12-03': [{name: 'Cycling'}, {name: 'Walking'}, {name: 'Running'}],
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

