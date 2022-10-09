import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'

import HeaderBar from "../components/HeaderBar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})