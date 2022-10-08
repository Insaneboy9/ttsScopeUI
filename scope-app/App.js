import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
  StatusBar,
  Platform,
} from "react-native";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
