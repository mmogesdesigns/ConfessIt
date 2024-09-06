import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function SplashPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo2.png")}
      />
      <Text style={styles.subtitle}>Confess your deepest darkest secret</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: "contain",
    marginTop: -50,
  },
  subtitle: {
    color: "#fff",
    paddingHorizontal: 20,
    marginTop: 70,
    fontWeight: "semibold",
    fontFamily: "Snell Roundhand",
    fontSize: 23,
  },
  button: {
    backgroundColor: "#FF24BD",
    marginBottom: 20,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 65,
    marginTop: 250,
  },
  buttonText: {
    color: "#1D1B20",
  },
});