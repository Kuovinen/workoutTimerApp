import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumInput from "./NumInput";
import Button from "./Button";
import st from "../utils/st";
export default function Manager() {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.text}>SECTTION1</Text>
      </View>
      <View style={styles.section2}>
        <View style={styles.input}>
          <View style={styles.subinput}>
            <Text style={styles.textInputTitle} adjustsFontSizeToFit>
              WORKOUT
            </Text>
            <View style={styles.inputs}>
              <NumInput />
              <NumInput />
            </View>
          </View>
          <View style={styles.subinput}>
            <Text style={styles.textInputTitle} adjustsFontSizeToFit>
              REST
            </Text>
            <View style={styles.inputs}>
              <NumInput />
              <NumInput />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button title={" ADD "} onPress={() => {}} />
          <Button title={" REMOVE "} onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={" BEGIN "} size={st.xxl} onPress={() => {}} />
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
    flex: 5,
    gap: 10,
  },
  section2: {
    flex: 5,
    gap: 10,
  },

  input: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    backgroundColor: st.tst,
  },
  subinput: {
    flex: 1,
    wdith: "50%",
    gap: 5,
  },
  inputs: {
    flex: 3,
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
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
  textInput: {
    flex: 1,
    color: st.light,
    fontSize: st.md,
    backgroundColor: st.tst2,
  },
});
