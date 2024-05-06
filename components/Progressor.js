import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Vibration,
  Platform,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import st from "../utils/st";
import Countdown from "./Countdown";
import ButtonRound from "./ButtonRound";

const { height, width } = Dimensions.get("window");
const S05_SECOND_IN_MS = 500;
const S02_SECOND_IN_MS = 200;
const S01_SECOND_IN_MS = 100;
const PATTERN = [1 * S01_SECOND_IN_MS, 1 * S02_SECOND_IN_MS];
const PATTERN2 = [
  1 * S01_SECOND_IN_MS,
  1 * S02_SECOND_IN_MS,
  1 * S01_SECOND_IN_MS,
  1 * S05_SECOND_IN_MS,
];
const PATTERN3 = [1 * S02_SECOND_IN_MS, 1 * S02_SECOND_IN_MS];

export default function Progressor({
  setCounting,
  timeValues,
  setTimeValues,
  setTimes,
  times,
}) {
  const [isPaused, setIsPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(1);
  const [amount, setAmount] = React.useState(1);
  const [yellow, setYellow] = React.useState(true);
  const positionRef = React.useRef(0);

  //create text based on current work/rest set
  function makeStringPattern() {
    const pos = Math.floor(positionRef.current);
    const slot = times[pos];
    return `${slot.rest.min}:${slot.rest.sec}/${slot.work.min}:${slot.work.sec}`;
  }

  function onEnd() {
    Vibration.vibrate(PATTERN);
    setProgress(1);
    //otherwise move to the next element

    setYellow(!yellow);
    setTimeValues((original) => [...original.slice(1)]);
    positionRef.current += 0.5;
  }

  //updates timer amounts as long as there's slots, else vibrate, reset and switch
  //screens:
  React.useEffect(() => {
    //end and switch screens if this was the last element
    if (timeValues.length === 0) {
      Vibration.vibrate(Platform.OS === "android" ? PATTERN2 : PATTERN3);
      setIsPaused(true);
      //recalculate values based on used up list
      setTimes((original) => [...original]);
      setCounting((el) => !el);
    }
    setAmount(() => timeValues[0]);
  }, [timeValues]);

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.bubble1}></View>
        <View style={styles.stripe}></View>

        <View style={styles.bubble2}></View>

        <View style={styles.bubble3}></View>

        <View style={styles.bubble4}></View>
        <View style={styles.bubbleSM1}></View>
        <View style={styles.bubbleSM2}></View>
        <View style={styles.bubble5}></View>
      </View>
      <View style={styles.section2}>
        <View style={styles.timer}>
          <Text style={styles.currentTimeUnit}>{makeStringPattern()}</Text>
          <Countdown
            amount={amount}
            isPaused={isPaused}
            onProgress={(progress) => {
              setProgress(progress);
            }}
            onEnd={onEnd}
            yellow={yellow}
          />
          <View
            style={{
              paddingTop: st.sm,
              width: "100%",
            }}
          >
            <ProgressBar
              progress={progress}
              color={st.light}
              style={styles.progress}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <ButtonRound
            title={isPaused ? "START" : "PAUSE"}
            onPress={() => {
              setIsPaused((el) => !el);
            }}
          />
          <ButtonRound
            title={" NEW "}
            onPress={() => {
              setCounting((el) => !el);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: st.bkg,
    flexDirection: "row",
    justifyContent: "center",
  },
  section1: {
    flex: 1,
    paddingTop: st.lg,
    marginLeft: st.sm,
    backgroundColor: st.wht,
    position: "relative",
    alignItems: "center",
  },

  stripe: {
    width: st.lg,
    top: st.lg,
    backgroundColor: st.dark,
    position: "absolute",
    height: (height / 10) * 6,
  },

  bubble1: {
    height: st.xxxls,
    width: st.xxxls,
    borderRadius: st.xl,
    borderWidth: st.sm,
    borderColor: st.dark,
    backgroundColor: st.wht,
    position: "absolute",
    top: st.md,
    zIndex: 3,
    elevation: 3,
  },
  bubble2: {
    height: st.xxxls,
    width: st.xxxls,
    borderRadius: st.xl,
    borderWidth: st.sm,
    borderColor: st.dark,
    backgroundColor: st.wht,
    position: "absolute",
    top: height / 8 + st.xxxls + st.md,
    zIndex: 3,
    elevation: 3,
  },
  bubble3: {
    height: st.xxxls,
    width: st.xxxls,
    borderRadius: st.xl,
    borderWidth: st.sm,
    borderColor: st.dark,
    backgroundColor: st.wht,
    position: "absolute",
    top: (height / 8) * 2 + st.xxxls * 2,
    zIndex: 3,
    elevation: 3,
  },
  bubble4: {
    height: st.xxxls,
    width: st.xxxls,
    borderRadius: st.xl,
    borderWidth: st.sm,
    borderColor: st.dark,
    backgroundColor: st.wht,
    position: "absolute",
    top: (height / 8) * 3 + st.xxxls * 3,
    zIndex: 3,
    elevation: 3,
  },
  bubble5: {
    height: st.xxxls,
    width: st.xxxls,
    borderRadius: st.xl,
    borderWidth: st.sm,
    borderColor: st.dark,
    backgroundColor: st.wht,
    position: "absolute",
    top: (height / 8) * 4 + st.xxxls * 4,
    zIndex: 3,
    elevation: 3,
  },
  bubbleSM1: {
    height: st.lg,
    width: st.lg,
    borderRadius: st.xl / 2,
    backgroundColor: st.dark,
    margin: st.sm,
    position: "absolute",
    bottom: height / 5,
    zIndex: 4,
    elevation: 4,
  },
  bubbleSM2: {
    height: st.lg,
    width: st.lg,
    borderRadius: st.xl / 2,
    backgroundColor: st.dark,
    margin: st.sm,
    position: "absolute",
    bottom: height / 4,
    zIndex: 4,
    elevation: 4,
  },
  section2: {
    flex: 4,
  },
  timer: {
    flex: 1,
    color: st.light,
    alignItems: "center",
    marginTop: st.xxl,
  },

  currentTimeUnit: {
    width: "100%",
    textAlign: "center",
    fontSize: st.xl,
    color: st.light,
  },
  timerLetters: {
    width: "100%",
    fontSize: st.xxxl,
    color: st.light,
    backgroundColor: st.btn,
  },
  progress: {
    height: st.sm,
    color: st.light,
    backgroundColor: st.btn,
    marginTop: st.sm,
  },
  buttons: { alignItems: "center", justifyContent: "center", flex: 2 },
  roundButton: {
    height: height / 4,
    width: height / 4,
    borderRadius: height / 8,
    borderWidth: st.xs,
    borderColor: st.light,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLetters: {
    fontSize: st.xxl,
    color: st.dark,
  },
});
