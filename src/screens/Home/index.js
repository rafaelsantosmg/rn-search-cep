import { useEffect, useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/Card";
import { getCep } from "../../services/index";

const Home = () => {
  const [cep, setCep] = useState("");
  const [activeScreen, setActiveScreen] = useState("primary");
  const [listCeps, setListCeps] = useState([]);
  const [isRender, setIsRender] = useState(false);

  const maskCep = (cep) => {
    cep = cep.replace(/\D/g, "");
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    setCep(cep);
  };

  const handlePress = async () => {
    const response = await getCep(cep.replace(/\D/g, ""));
    if (response.erro) {
      Alert.alert("Cep Inválido");
    } else {
      listCeps.push(response);
    }
    setCep("");
    setIsRender(!isRender);
  };

  useEffect(() => {
    setListCeps(listCeps);
  }, [isRender]);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
        <Text style={{ ...styles.text, textAlign: "center" }}>
          BEM VINDO AO APP VIACEP
        </Text>
        <Text style={styles.text}>
          Aqui você pode fazer sua busca de endereços por "CEP" de todo o
          Brasil!
        </Text>
      </View>
      <View style={{ margin: 20, marginBottom: 40 }}>
        <Text style={styles.text}>CEP:</Text>
        <TextInput
          maxLength={9}
          onChangeText={(text) => maskCep(text)}
          placeholder="00000-000"
          style={styles.input}
          value={cep}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={handlePress}
          disabled={cep.length !== 9}
        >
          <Text style={styles.textAdd}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={
            activeScreen === "primary"
              ? styles.activeTouchable
              : styles.unactiveTouchable
          }
          onPress={() => setActiveScreen("primary")}
        >
          <Text
            style={
              activeScreen === "primary"
                ? styles.activeTouchableText
                : styles.unactiveTouchableText
            }
          >
            UF - Cidade
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeScreen === "secundary"
              ? { ...styles.activeTouchable }
              : { ...styles.unactiveTouchable }
          }
          onPress={() => setActiveScreen("secundary")}
        >
          <Text
            style={
              activeScreen === "secundary"
                ? { ...styles.activeTouchableText }
                : { ...styles.unactiveTouchableText }
            }
          >
            Cidade - Logradouro
          </Text>
        </TouchableOpacity>
      </View>
      {listCeps.length !== 0 && activeScreen === "primary" ? (
        <Card ceps={listCeps} primary />
      ) : (
        <Card ceps={listCeps} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6E48A",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "#478203",
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
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
    width: "100%",
  },
  buttonAdd: {
    backgroundColor: "#478203",
    height: 40,
    borderRadius: 5,
    width: "100%",
  },
  textAdd: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 6,
  },
  buttonContainer: {
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#478203",
    justifyContent: "space-around",
    width: "90%",
    paddingTop: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  activeTouchable: {
    borderBottomWidth: 3,
    borderBottomColor: "#fff",
    color: "#fff",
    paddingBottom: 10,
    width: "50%",
    alignItems: "center",
  },
  unactiveTouchable: {
    width: "50%",
    alignItems: "center",
  },
  activeTouchableText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  unactiveTouchableText: {
    fontSize: 15,
    color: "#fff",
  },
});

export default Home;
