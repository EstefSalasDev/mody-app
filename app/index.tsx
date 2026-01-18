import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const logo = require("../assets/images/favicon.png");

  const handleLogin = () => {
    console.log("Identification:", id);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

      <View style={styles.inputContainer}>
        <FontAwesome6 name="user-large" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Identificación"
          value={id}
          onChangeText={setId}
          autoCapitalize="none"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="lock" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#555", // opcional, cambia el color del icono
  },
  input: {
    flex: 1,
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
