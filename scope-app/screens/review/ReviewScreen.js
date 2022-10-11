import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import HeaderBar from "../../components/HeaderBar";

export default function ReviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})