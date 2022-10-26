import { Button,SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SectionBar from '../../components/SectionBar'
import HeaderBar2 from '../../components/HeaderBar2'
import { useRoute } from '@react-navigation/native'

export default function WashScreen(props) {

  const route = useRoute()
  const onChangeText = React.useState(null)

  const wash = {
    'month': 'October',
    'DoC': '03/10/2022',
    'accession': '2013315475',
    'washBy': 'jackie',
    'collectedBy': 'bruce',
    'circulatedBy': 'jay',
  }

  const keys = []
  const vals = []
  const date = ''

  for (const [key, val] of Object.entries(route.params.scope)) {
    keys.push(key)
    vals.push([val])
  }

  return (
    <SafeAreaView>
    <HeaderBar2 navigation= {props.navigation} />
    
    <SafeAreaView style={styles.section}>
      <SectionBar name="Add Wash"/>
      <ScrollView>
        <View>
          <View style={styles.label}>
            <Text style={styles.titleText}>
              Month
            </Text>
          </View>
          <TextInput 
            style = {styles.textBox}
            value = {wash.month}
            onChangeText = {onChangeText}
            textAlign = 'center'
          />
        </View>
        <View>
          <View style={styles.label}>
            <Text style={styles.titleText}>
              Date Of Collection
            </Text>
          </View>
          <TextInput 
            style = {styles.textBox}
            value = {wash.DoC}
            onChangeText = {onChangeText}
            textAlign = 'center'
          />
        </View>
        <View>
          <View style={styles.label}>
          <Text style={styles.titleText}>
            Accession
          </Text>
          </View>
          <TextInput 
            style = {styles.textBox}
            value = {wash.accession}
            onChangeText = {onChangeText}
            textAlign = 'center'
          />
        </View>
        <View>
          <View style={styles.label}>
            <Text style={styles.titleText}>
              Washed By
            </Text>
          </View>
          <TextInput 
            style = {styles.textBox}
            value = {wash.washBy}
            onChangeText = {onChangeText}
            textAlign = 'center'
          />
        </View>
        <View>
          <View style={styles.label}>
            <Text style={styles.titleText}>
              Collected By
            </Text>
          </View>
          <TextInput 
            style = {styles.textBox}
            value = {wash.collectedBy}
            onChangeText = {onChangeText}
            textAlign = 'center'
          />
        </View>
        <View>
          <View style={styles.label}>
            <Text style={styles.titleText}>
              Circulated By
            </Text>
          </View>
          <TextInput 
            style = {styles.textBox}
            value = {wash.circulatedBy}
            onChangeText = {onChangeText}
            textAlign = 'center'
          />
        </View>
        <View>
          <View style={styles.label}>
            <Text style={styles.titleText}>
              Model
            </Text>
          </View>
          <TextInput 
            style = {styles.textBox}
            value = {route.params.scope.model}
            onChangeText = {onChangeText}
            textAlign = 'center'
          />
        </View>
        <View>
          <View style={styles.label}>
            <Text style={styles.titleText}>
              Serial Number
            </Text>
          </View>
          <TextInput 
            style = {styles.textBox}
            value = {route.params.scope.serial}
            onChangeText = {onChangeText}
            textAlign = 'center'
          />
        </View>
        <SafeAreaView style={styles.button}>
          <Button title="WASH" />
        </SafeAreaView>
        <View style={{height: 200}}/>
      </ScrollView>
    </SafeAreaView>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  section: {
    marginTop: 30,
    color: 'black',
  },

  textBox: {
    height: 40,
    marginHorizontal: 12,
    marginTop: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  label: {
    width: "50%",
    height: 40,
    borderRadius: 10,
    marginHorizontal: "2%",
    paddingHorizontal: 12,
    justifyContent: "center",
    paddingVertical: 5,
    backgroundColor: "#ADD8E6",
    marginTop: 10,
    alignItems: "center",
    color: 'black'
  },
  titleText: {
    fontSize: 20,
    color: "black",
  },
  button: {
    margin: "2%",
  },
});