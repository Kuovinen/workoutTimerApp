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
import ProgressStripe from "./ProgressStripe";
//Constants:
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
//FUNCTION HERE:
export default function Progressor({
  setCounting,
  timeValues,
  setTimeValues,
  setTimes,
  times,
}) {
  const [isPaused, setIsPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(1); //progresbar value
  const [amount, setAmount] = React.useState(1); //currently handled time amount
  const [loop, setLoop] = React.useState(true); //trigger for coutdown loop reset
  const [yellow, setYellow] = React.useState(true); //for styling
  const positionRef = React.useRef(0); //where in the object array we are

  //create text based on current work/rest set. Used above timer view
  function makeStringPattern() {
    const pos = Math.floor(positionRef.current);
    const slot = times[pos];
    const total = times.length - pos;
    return `${total} ${slot.rest.min}:${slot.rest.sec}/${slot.work.min}:${slot.work.sec}`;
  }
  //END OF INDIVIDUAL TIMER INSTANCES Rest+Work, NOT ENTIRE SET
  function onEnd() {
    Vibration.vibrate(PATTERN);
    setProgress(1);
    setYellow(!yellow);
    setTimeValues((original) => [...original.slice(1)]);
    positionRef.current += 0.5;
  }

  //updates timer amounts as long as there's slots, else vibrate, reset, switch
  //screens:
  React.useEffect(() => {
    //end and switch screens if this was the last element
    if (timeValues.length === 0) {
      Vibration.vibrate(Platform.OS === "android" ? PATTERN2 : PATTERN3);
      setIsPaused(true);
      //recalculate values based on used up list
      setTimes((original) => [...original]);
      setCounting((el) => !el); //this switches screens
    }
    setAmount(() => timeValues[0]); //new time to count down
    setLoop((original) => !original); //force countdown restart
  }, [timeValues]);

  return (
    <View style={styles.container}>
      <ProgressStripe timeValues={timeValues} />
      <View style={styles.section2}>
        <View style={styles.timer}>
          <Text style={styles.currentTimeUnit}>{makeStringPattern()}</Text>
          <Countdown
            amount={amount}
            loop={loop}
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
