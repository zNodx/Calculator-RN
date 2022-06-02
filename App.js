import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);
    
  const addDigit = (n) => {
    const clearingDisplay = displayValue === "0" || clearDisplay;

    if (n === "." && !clearingDisplay && displayValue.includes(".")) {
      return;
    }
    const currentValue = clearingDisplay ? "" : displayValue;
    const displayVal = currentValue + n;
    setDisplayValue(displayVal);
    setClearDisplay(false);

    if (n !== ".") {
      const newValue = parseFloat(displayVal);
      const newValues = [...values];
      newValues[current] = newValue;
      setValues(newValues);
    }
  };

  const operationHandler = (op) => {
    if (current === 0) {
        setOperation(op);
        setCurrent(1);
        setClearDisplay(true);
    } else {
        const equals = op === "=";
        const value = [...values];
        try {
            value[0] = eval(`${value[0]} ${operation} ${value[1]}`);
        } catch (e) {
            value[0] = values[0];
        }
        value[1] = 0;
        setDisplayValue(value[0]);
        setOperation(equals ? null : op);
        setCurrent(equals ? 0 : 1);
        setClearDisplay(!equals);
        
      }
    }

  const clearMemory = () => {
    setDisplayValue("0");
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.board}>
        <Button label="AC" onPress={() => clearMemory()} />
        <Button label="/" operator onPress={() => [operationHandler('/')]} />

        <Button label="7" onPress={() => addDigit('7')} />
        <Button label="8" onPress={() => addDigit('8')} />
        <Button label="9" onPress={() => addDigit('9')} />
        <Button label="*" operator onPress={() => [operationHandler('*')]} />

        <Button label="4" onPress={() => addDigit('4')} />
        <Button label="5" onPress={() => addDigit('5')} />
        <Button label="6" onPress={() => addDigit('6')} />
        <Button label="-" operator onPress={() => [operationHandler('-')]} />

        <Button label="1" onPress={() => addDigit('1')} />
        <Button label="2" onPress={() => addDigit('2')} />
        <Button label="3" onPress={() => addDigit('3')} />
        <Button label="+" operator onPress={() => [operationHandler('+')]} />

        <Button label="0" onPress={() => addDigit('0')} />
        <Button label="." onPress={() => addDigit('.')} />
        <Button label="=" operator onPress={() => [operationHandler('=')]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
