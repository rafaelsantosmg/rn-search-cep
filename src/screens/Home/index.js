import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Home = () => {
  const [cep, setCep] = useState("");

  const maskCep = (cep) => {
    cep = cep.replace(/\D/g, "");
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    setCep(cep);
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 20, marginTop: 40 }}>
        <Text style={styles.text}>Bem vindo a ViaCep</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.text}>
          Aqui você pode fazer sua busca de endereços por cep de todo o Brasil!
        </Text>
      </View>
      <View style={{ margin: 20, marginTop: 40 }}>
        <Text style={styles.text}>CEP:</Text>
        <TextInput
          maxLength={9}
          onChangeText={(text) => maskCep(text)}
          placeholder="00000-000"
          style={styles.input}
          value={cep}
        />
        <Button color="#478203" title="Buscar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F6E48A",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "#478203",
    marginBottom: 5,
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "justify",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#478203",
    borderRadius: 5,
    borderWidth: 2,
    fontSize: 20,
    height: 50,
    marginBottom: 15,
    paddingLeft: 10,
    textAlign: "justify",
    width: 300,
  },
  button: {
    backgroundColor: "#478203",
    color: "#fff",
  },
});

export default Home;
