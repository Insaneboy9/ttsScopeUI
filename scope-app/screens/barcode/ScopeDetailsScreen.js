import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBar2 from '../../components/HeaderBar2'

export default function ScopeDetailsScreen(props) {
  const addRecord = () => {
    props.navigation.navigate("ScopeDetailsScreen2")
  }

  return (
    <SafeAreaView>
      <HeaderBar2 navigation= {props.navigation} />
      <SafeAreaView style= {styles.button}>
      <Button onPress={addRecord} title="New Record" color="green" />
      </SafeAreaView>
    </SafeAreaView>
  )
}

export function PersonnelDetailsScreen() {
  return (
    <View>
      <Text>ScopeDetailsScreen2</Text>
    </View>
  )
}

export function AERDetailsScreen() {
  return (
    <View>
      <Text>ScopeDetailsScreen2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingLeft:20,
    paddingRight:20,
    marginTop: 400
  }
})