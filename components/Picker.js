import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";
import st from "../utils/st";

export default function Dropdown() {
  const [selectedValue, setSelectedValue] = React.useState(null);

  return (
    <View style={styles.picker}>
      <RNPickerSelect
        placeholder={{}}
        placeholderTextColor="red"
        onValueChange={setSelectedValue}
        selectedValue={selectedValue}
        dropdownIconColor={st.trns}
        itemStyle={{
          backgroundColor: "grey",
          color: "blue",
          fontFamily: "Arial",
          fontSize: 17,
        }}
        items={[
          { label: "00", value: 0 },
          { label: "01", value: 1 },
          { label: "02", value: 2 },
          { label: "03", value: 3 },
          { label: "04", value: 4 },
          { label: "05", value: 5 },
          { label: "06", value: 6 },
          { label: "07", value: 7 },
          { label: "08", value: 8 },
          { label: "09", value: 9 },
        ]}
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
});
