import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const CardView = ({ navigation, ceps, primary }) => {
  return primary
    ? ceps.map((cepDetail, index) => (
        <Card
          style={styles.container}
          key={index}
          onPress={() => navigation.navigate("Detail", cepDetail)}
        >
          <Card.Content>
            <Text style={styles.text}>CEP: {cepDetail.cep}</Text>
            <Text style={styles.text}>UF: {cepDetail.uf}</Text>
            <Text style={styles.text}>Cidade: {cepDetail.localidade}</Text>
          </Card.Content>
        </Card>
      ))
    : ceps.map((cepDetail, index) => (
        <Card style={styles.container} key={index}>
          <Text style={styles.text}>CEP: {cepDetail.cep}</Text>
          <Text style={styles.text}>Cidade: {cepDetail.localidade}</Text>
          <Text style={styles.text}>
            {logradouro.length !== 0
              ? `Endereço: ${cepDetail.logradouro}`
              : "Cep único para toda cidade!"}
          </Text>
        </Card>
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
    marginBottom: 20,
    padding: 15,
    width: "80%",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CardView;
