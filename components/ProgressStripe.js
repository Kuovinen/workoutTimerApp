import { Dimensions, StyleSheet, View } from "react-native";
import st from "../utils/st";
const { height, width } = Dimensions.get("window");
export default function ProgressStripe({ timeValues }) {
  const pairsAmount = Math.ceil(timeValues.length / 2);
  return (
    <View style={styles.section1}>
      <View style={styles.bubble1}></View>
      {pairsAmount > 1 ? <View style={styles.stripe1}></View> : ""}
      {pairsAmount > 2 ? <View style={styles.stripe2}></View> : ""}
      {pairsAmount > 3 ? <View style={styles.stripe3}></View> : ""}
      {pairsAmount === 5 ? <View style={styles.stripe4}></View> : ""}

      {pairsAmount > 1 ? <View style={styles.bubble2}></View> : ""}
      {pairsAmount > 2 ? <View style={styles.bubble3}></View> : ""}
      {pairsAmount > 3 ? <View style={styles.bubble4}></View> : ""}
      {pairsAmount > 4 ? <View style={styles.bubble5}></View> : ""}
      {pairsAmount > 5 ? <View style={styles.bubbleSM1}></View> : ""}
      {pairsAmount > 5 ? <View style={styles.bubbleSM2}></View> : ""}
    </View>
  );
}
const stripeBasic = {
  width: st.lg,
  top: st.lg,
  backgroundColor: st.dark,
  position: "absolute",
};
const bblBasic = {
  height: st.xxxls,
  width: st.xxxls,
  borderRadius: st.xl,
  borderWidth: st.sm,
  borderColor: st.dark,
  backgroundColor: st.wht,
  position: "absolute",
};
const styles = StyleSheet.create({
  section1: {
    flex: 1,
    paddingTop: st.lg,
    marginLeft: st.sm,
    backgroundColor: st.wht,
    position: "relative",
    alignItems: "center",
  },
  stripe1: {
    ...stripeBasic,
    height: (height / 10) * 2,
  },
  stripe2: {
    ...stripeBasic,
    height: (height / 10) * 4,
  },
  stripe3: {
    ...stripeBasic,
    height: (height / 10) * 6,
  },
  stripe4: {
    ...stripeBasic,
    height: (height / 10) * 8,
  },

  bubble1: {
    ...bblBasic,
    top: st.md,
    zIndex: 3,
    elevation: 3,
  },
  bubble2: {
    ...bblBasic,
    top: height / 8 + st.xxxls + st.md,
    zIndex: 3,
    elevation: 3,
  },
  bubble3: {
    ...bblBasic,
    top: (height / 8) * 2 + st.xxxls * 2,
    zIndex: 3,
    elevation: 3,
  },
  bubble4: {
    ...bblBasic,
    top: (height / 8) * 3 + st.xxxls * 3,
    zIndex: 3,
    elevation: 3,
  },
  bubble5: {
    ...bblBasic,
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
});
