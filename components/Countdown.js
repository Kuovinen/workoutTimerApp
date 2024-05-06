import { StyleSheet, Text, View } from "react-native";
import React from "react";
import st from "../utils/st";

const formatTime = (time) => (time < 10 ? `0${time}` : time);

export default function Countdown({
  amount = 0.1,
  isPaused,
  onProgress,
  onEnd,
  yellow,
}) {
  const interval = React.useRef(null);
  const [millis, setMillis] = React.useState(null); //used for progressbar calc

  function countDown() {
    setMillis((currentTimeMillis) => {
      //if DONE
      if (currentTimeMillis === 0) {
        clearInterval(interval.current);
        onEnd();
        return Math.floor(currentTimeMillis);
      }
      //OTHERWISE
      const timeLeft = currentTimeMillis - 1000;
      console.log("tik");
      return timeLeft;
    });
  }
  //when minutes prop changes starts the ENTIRE thing by changing the MILLIS trigger
  React.useEffect(() => {
    console.log(`set ${amount} millis!`);
    setMillis(amount);
  }, [amount]);

  //progres bar value adjuster:
  React.useEffect(() => {
    onProgress(millis / amount);
    console.log("Current millis: " + millis);
  }, [millis]);

  //MAIN TIME LOOP CONTROL, triggered by isPaused state
  React.useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000); //this does the work
    return () => clearInterval(interval.current);
  }, [millis, isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <View style={yellow ? styles.containerY : styles.container}>
      <Text style={yellow ? styles.timerLettersY : styles.timerLetters}>
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
  containerY: {
    width: "100%",
    backgroundColor: st.btnY,
  },
  timerLetters: {
    fontSize: st.xxxl,
    color: st.light,
  },
  timerLettersY: {
    fontSize: st.xxxl,
    color: st.lightY,
  },
});
