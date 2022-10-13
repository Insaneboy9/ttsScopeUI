import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionBar from '../../components/SectionBar'
import HeaderBar2 from '../../components/HeaderBar2'

export default function SampleScreen(props) {
  return (
    <SafeAreaView>
    <HeaderBar2 navigation= {props.navigation} />
    <SafeAreaView style={styles.section}>
      <SectionBar name="NEW RECORD"/>
    </SafeAreaView>
    <SafeAreaView style={styles.section}>
      <SectionBar name="PERSONNEL"/>
    </SafeAreaView>
    <SafeAreaView style={styles.section}>
      <SectionBar name="AER DETAILS"/>
    </SafeAreaView>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  section: {
    marginTop: 30
  },
})