import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import imgViaCep from "../../../assets/viacep.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgViaCep} />
      <Text style={styles.text}>Consulte CEPs de todo o Brasil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#478203",
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  image: {
    height: 50,
    marginLeft: 20,
    marginTop: 25,
    width: 200,
  },
  text: {
    color: "#fff",
    marginLeft: 20,
  },
});

export default Header;
