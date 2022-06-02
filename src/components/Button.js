import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

export default function Button({ label, onPress, operator }) {

  const styleButton = [styles.button];  
  if (operator) styleButton.push(styles.operationButton);
  
  if ( label === '0' ) styleButton.push(styles.buttonDouble);

  if (label === 'AC') styleButton.push(styles.buttonTriple);

  return (
    <TouchableHighlight onPress={onPress} underlayColor="white">
      <Text style={styleButton}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888"
  },
  operationButton: {
    color: "#fff",
    backgroundColor: "#fa8231"
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3
  }
})


