import { router } from "expo-router";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const logo = require("../assets/images/logo.svg");

  const handleLogin = () => {
    console.log("Identification:", id);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Identificación"
        value={id}
        onChangeText={setId}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.linksContainer}>
        <Text
          style={styles.link}
          onPress={() => router.push("/Forgot_Password")}
        >
          ¿Olvidó su contraseña?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" onPress={handleLogin} />
      </View>

      <View style={styles.linksContainer}>
        <Text style={styles.link} onPress={() => router.push("/Sign_In")}>
          Registrarme
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 16,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 8,
  },
  linksContainer: {
    marginTop: 20,
    alignItems: "center",
    gap: 8,
  },
  link: {
    color: "#007AFF", // azul estilo iOS
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
