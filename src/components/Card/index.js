import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = ({ ceps, primary }) => {
  return primary
    ? ceps.map(({ cep, uf, localidade }, index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.text}>CEP: {cep}</Text>
          <Text style={styles.text}>UF: {uf}</Text>
          <Text style={styles.text}>Cidade: {localidade}</Text>
        </View>
      ))
    : ceps.map(({ cep, localidade, logradouro }, index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.text}>CEP: {cep}</Text>
          <Text style={styles.text}>Cidade: {localidade}</Text>
          <Text style={styles.text}>Endereço: {logradouro}</Text>
        </View>
      ));
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderColor: "#478203",
    borderRadius: 20,
    borderWidth: 2,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop: 15,
    padding: 15,
    width: "80%",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Card;
