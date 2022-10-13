import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import HeaderBar2 from "../../components/HeaderBar2";

export default function FullScheduleScreen(props) {
  return (
    <SafeAreaView>
      <HeaderBar2 navigation={props.navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
