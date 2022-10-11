import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function GreenButton(props) {
  return (
    <SafeAreaView style={styles.button}>
    <TouchableOpacity onPress= {login} style={styles.signIn}>
      <Text style={[styles.textSign, { color: "black" }]}>{props.name}</Text>
      </TouchableOpacity>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    button: {
        alightItems: "center",
        marginTop: 50,
      }
})