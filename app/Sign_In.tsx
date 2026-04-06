import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles/Sign_In-style.js";

export default function SigninScreen() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordRepeat] = useState("");
  const logo = require("../assets/images/favicon.png");

  const handleSignin = () => {
    console.log("Identification:", id);
    console.log("Password:", password);
    console.log("PasswordRepeat:", passwordrepeat);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Regístrate para continuar</Text>

      {/* Input identificación */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={24} style={styles.icon} solid />
        <TextInput
          style={styles.input}
          placeholder="Identificación"
          value={id}
          onChangeText={setId}
          autoCapitalize="none"
          keyboardType="numeric"
        />
      </View>

      {/* Input contraseña */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="lock" size={24} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Escriba una contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Input contraseña nuevamente */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="lock" size={24} color="#555" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Escriba la contraseña de nuevo"
          value={passwordrepeat}
          onChangeText={setPasswordRepeat}
          secureTextEntry
        />
      </View>

      {/* Botón de registro */}
      <TouchableOpacity onPress={() => console.log("Login")}>
        <LinearGradient
          colors={["#3163D6", "#6D92E0"]} // azul oscuro → azul claro
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Registrarme</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Link de inicio de sesión */}
      <Text style={styles.linkLogIn} onPress={() => router.push("..")}>
        ¿Ya tienes una cuenta? Inicia sesión
      </Text>
    </View>
  );
}
