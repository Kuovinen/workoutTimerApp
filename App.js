import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";

import st from "./utils/st";
import Progressor from "./components/Progressor";
import Manager from "./components/Manager";
import { View } from "react-native";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stripe}></View>
      <Manager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: st.bkg,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: st.bkg,
  },
  stripe: {
    height: Platform.OS === "android" ? StatusBar.currentHeight + 6 : 0,
    backgroundColor: st.light,
    borderColor: st.bkg,
    borderBottomWidth: 1,
  },
});
