import { StyleSheet, Platform, StatusBar, Text, View } from "react-native";
import React from "react";
import st from "../utils/st";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export default function Countdown({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}) {
  const interval = React.useRef(null);
  const [millis, setMillis] = React.useState(null); //used for progressbar calc

  function reset() {
    setMillis(minutesToMillis(minutes));
  }
  function countDown() {
    setMillis((currentTimeMillis) => {
      //if DONE
      if (currentTimeMillis === 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return currentTimeMillis;
      }
      //OTHERWISE
      const timeLeft = currentTimeMillis - 1000;
      return timeLeft;
    });
  }
  //when minutes prop changes starts the ENTIRE thing by changing the MILLIS trigger
  React.useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  //progres bar value adjuster:
  React.useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  //MAIN TIME LOOP CONTROL, triggered by isPaused state
  React.useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000); //this does the work
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.timerLetters}>
        {` ${formatTime(minute)}:${formatTime(seconds)} `}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: st.btn,
  },
  timerLetters: {
    fontSize: st.xxxl,
    color: st.light,
  },
});
