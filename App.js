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
  console.log("render APP");
  const [times, setTimes] = React.useState([]);
  const [timeValues, setTimeValues] = React.useState([]);
  const [counting, setCounting] = React.useState(false);

  function reformatTimeValues(textTimes) {
    const finalArray = [];
    // {work: { min: "00", sec: "00" }, rest: { min: "00", sec: "00" }}
    const minutesToMillis = (min) => min * 1000 * 60;
    const secondsToMillis = (sec) => sec * 1000;
    textTimes.forEach((el) => {
      const rvalueMin = minutesToMillis(Number(el.rest.min));
      const rvalueSec = secondsToMillis(Number(el.rest.sec));
      const rtotal = rvalueMin + rvalueSec;
      finalArray.push(rtotal);
      const wvalueMin = minutesToMillis(Number(el.work.min));
      const wvalueSec = secondsToMillis(Number(el.work.sec));
      const wtotal = wvalueMin + wvalueSec;
      finalArray.push(wtotal);
    });
    return finalArray;
  }

  React.useEffect(() => {
    setTimeValues((or) => reformatTimeValues(times));
  }, [times]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stripe}></View>
      {!counting ? (
        <Manager setCounting={setCounting} times={times} setTimes={setTimes} />
      ) : (
        <Progressor
          setCounting={setCounting}
          timeValues={timeValues}
          setTimeValues={setTimeValues}
          setTimes={setTimes}
          times={times}
        />
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
