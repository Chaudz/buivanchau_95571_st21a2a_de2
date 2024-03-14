import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const QuadraticEquationSolver = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [solution, setSolution] = useState("");

  const solveQuadraticEquation = () => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      setSolution("Vui lòng nhập các số hợp lệ cho a, b, c");
      return;
    }

    const delta = B * B - 4 * A * C;

    if (delta > 0) {
      const x1 = (-B + Math.sqrt(delta)) / (2 * A);
      const x2 = (-B - Math.sqrt(delta)) / (2 * A);
      setSolution(`Nghiệm của phương trình là: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
      const x = -B / (2 * A);
      setSolution(`Nghiệm kép của phương trình là: x = ${x}`);
    } else {
      setSolution("Phương trình không có nghiệm thực");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số a"
        keyboardType="numeric"
        value={a}
        onChangeText={(text) => setA(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số b"
        keyboardType="numeric"
        value={b}
        onChangeText={(text) => setB(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số c"
        keyboardType="numeric"
        value={c}
        onChangeText={(text) => setC(text)}
      />
      <Button title="Giải" onPress={solveQuadraticEquation} />
      <Text style={styles.solution}>{solution}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  solution: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default QuadraticEquationSolver;
