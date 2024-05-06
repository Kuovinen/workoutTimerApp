import React from "react";
import { TouchableOpacity, Text, Dimensions, StyleSheet } from "react-native";
import st from "../utils/st";

const { height, width } = Dimensions.get("window");

export default function ButtonRound(props) {
  return (
    <TouchableOpacity style={styles.roundButton} onPress={props.onPress}>
      <Text style={styles.buttonLetters} adjustsFontSizeToFit>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
