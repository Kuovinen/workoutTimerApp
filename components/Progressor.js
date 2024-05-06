import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ProgressBar } from "react-native-paper";
import st from "../utils/st";
const { height, width } = Dimensions.get("window");
export default function Progressor() {
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
          <Text style={styles.currentTimeUnit}>{" 00:00 / 00:00 "}</Text>

          <Text style={styles.timerLetters}>{" 00:00 "}</Text>
          <View style={{ paddingTop: st.sm }}>
            <ProgressBar
              progress={1}
              color={st.light}
              style={{ height: st.sm }}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.roundButton}>
            <Text style={styles.buttonLetters}>{" || "}</Text>
          </View>
          <View style={styles.roundButton}>
            <Text style={styles.buttonLetters}>{" NEW "}</Text>
          </View>
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
    marginTop: st.xxxl,
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
  buttons: { alignItems: "center", flex: 2 },
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
