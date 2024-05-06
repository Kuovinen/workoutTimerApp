import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import React from "react";
import st from "./utils/st";
import Progressor from "./components/Progressor";
import Manager from "./components/Manager";

export default function App() {
  const [counting, setCounting] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stripe}></View>
      {!counting ? (
        <Manager setCounting={setCounting} />
      ) : (
        <Progressor setCounting={setCounting} />
      )}
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
    backgroundColor: st.dark,
    borderColor: st.bkg,
    borderBottomWidth: 1,
  },
});
