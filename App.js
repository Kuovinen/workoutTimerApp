import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";

import st from "./utils/st";
import Progressor from "./components/Progressor";
import Manager from "./components/Manager";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Manager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: st.bkg,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },
});
