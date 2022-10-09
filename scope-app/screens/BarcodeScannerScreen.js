import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import HeaderBar from "../components/HeaderBar";

export default function BarcodeScannerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})