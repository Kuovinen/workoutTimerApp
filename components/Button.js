import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import st from "../utils/st";

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text} adjustsFontSizeToFit>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: st.btn,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: st.light,
    alignSelf: "center",
    textAlign: "justify",
    fontSize: st.xl,
  },
});
