import React from "react";
import { StyleSheet, View } from "react-native";
import st from "../utils/st";
import { TextInput } from "react-native-paper";
export default function Dropdown(props) {
  const key = props.target;

  //const [selectedValue, setSelectedValue] = React.useState(null);
  function onChanged(value) {
    const fixSymbols = value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, "");
    const result = fixSymbols.length > 2 ? value.slice(0, 2) : fixSymbols;
    props.setValue((original) => {
      return { ...original, [key]: result };
    });
  }
  return (
    <View style={styles.picker}>
      <TextInput
        style={styles.textInputStyle}
        placeholder={"00"}
        placeholderTextColor={st.light}
        keyboardType="numeric"
        onChangeText={(value) => onChanged(value)}
        value={props.value[key]}
        textColor={st.light}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  picker: {
    flex: 1,
    fontSize: st.xl,
    color: st.light,
    backgroundColor: st.btn,
  },
  textInputStyle: {
    flex: 1,
    fontSize: st.xl,
    color: "green",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: st.btn,
  },
});
