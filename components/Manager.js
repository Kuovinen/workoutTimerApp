import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import NumInput from "./NumInput";
import Button from "./Button";
import st from "../utils/st";
export default function Manager({ times, setTimes }) {
  const [restTime, setRestTime] = React.useState({ min: "00", sec: "00" });
  const [workTime, setWorkTime] = React.useState({ min: "00", sec: "00" });
  const scrollViewRef = React.useRef();
  function addTime() {
    console.log(Number(restTime.min));
    if (
      Number(restTime.min) > 0 ||
      Number(restTime.sec) > 0 ||
      Number(workTime.min) > 0 ||
      Number(workTime.sec) > 0
    ) {
      setTimes((current) => {
        return [...current, { work: workTime, rest: restTime }];
      });
    }
  }
  function removeTime() {
    setTimes((current) => {
      return [...current.slice(0, -1)];
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.section1}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {times.map((el, index) => (
          <View key={el + index} style={styles.timeUnit}>
            <Text style={styles.timetext}>
              {`${index + 1 < 10 ? "0" + (index + 1) : index + 1}   W ${
                el.work.min
              }:${el.work.sec} - R ${el.rest.min}:${el.rest.sec}`}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.section2}>
        <View style={styles.inputsContainter}>
          <View style={styles.subinput}>
            <Text style={styles.textInputTitle} adjustsFontSizeToFit>
              WORKOUT
            </Text>
            <View style={styles.inputs}>
              <NumInput target="min" value={workTime} setValue={setWorkTime} />
              <NumInput target="sec" value={workTime} setValue={setWorkTime} />
            </View>
          </View>
          <View style={styles.subinput}>
            <Text style={styles.textInputTitle} adjustsFontSizeToFit>
              REST
            </Text>
            <View style={styles.inputs}>
              <NumInput target="min" value={restTime} setValue={setRestTime} />
              <NumInput target="sec" value={restTime} setValue={setRestTime} />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <Button
              title={" ADD "}
              onPress={() => {
                addTime();
              }}
            />
            <Button
              title={" REMOVE "}
              onPress={() => {
                removeTime();
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={" BEGIN "}
              size={st.xxl}
              onPress={() => {
                if (times.length) {
                  props.setCounting((el) => !el);
                }
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: "2%",
    marginLeft: "2%",
    gap: 10,
  },
  section1: {
    flex: 2,
  },
  timeUnit: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  timetext: {
    flex: 1,
    color: st.light,
    fontSize: st.lg,
    textAlign: "center",
  },
  section2: {
    gap: 10,
    minHeight: 250,
  },

  inputsContainter: {
    flex: 3,
    gap: st.sm,
    flexDirection: "row",
    backgroundColor: st.tst,
  },
  subinput: {
    flex: 1,
    gap: 10,
  },
  inputs: {
    flex: 3,
    alignItems: "center",
    flexDirection: "row",
    gap: st.sm,
  },
  buttonsContainer: {
    flexGrow: 4,
    gap: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    gap: st.sm,
  },
  buttonContainer: {
    flex: 1,
  },

  text: {
    width: "100%",
    color: st.light,
  },
  textInputTitle: {
    flex: 2,
    textAlign: "center",
    textAlignVertical: "center",
    color: st.dark,
    backgroundColor: st.wht,
    fontSize: st.lg,
  },
});
