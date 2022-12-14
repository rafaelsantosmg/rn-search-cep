import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CardDetails = ({ route }) => {
  const {
    bairro,
    cep,
    complemento,
    ddd,
    localidade,
    logradouro,
    uf,
    cardName,
  } = route.params;

  return (
    <View style={{ backgroundColor: "#F6E48A", flex: 1 }}>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
        <Text style={{ ...styles.title, textAlign: "center" }}>
          DETALHES DO CEP INFORMADO
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={{ ...styles.title, textAlign: "center" }}>
          {cardName ? "Listagen UF - Cidade" : "Listagen Cidade - Logradouro"}
        </Text>
        <Text style={styles.text}>CEP: {cep}</Text>
        <Text style={styles.text}>UF: {uf}</Text>
        <Text style={styles.text}>Cidade: {localidade}</Text>
        <Text style={styles.text}>DDD: {ddd}</Text>
        <Text style={styles.text}>Bairro: {bairro}</Text>
        <Text style={styles.text}>Complemento: {complemento}</Text>
        <Text style={styles.text}>Logradouro: {logradouro}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderColor: "#478203",
    borderRadius: 20,
    borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    margin: 30,
    padding: 15,
    width: "80%",
  },
  title: {
    color: "#478203",
    marginBottom: 5,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "justify",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    lineHeight: 40,
    textDecorationLine: "underline",
  },
});

export default CardDetails;
