import FontAwesome5 from "@expo/vector-icons/FontAwesome5.js";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles/home-style.js";

export default function HomeScreen() {
  const logo = require("../assets/images/favicon.png");
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <View style={{ position: "relative" }}>
          {/* Ícono de usuario */}
          <Pressable onPress={() => setOpen(!open)}>
            <FontAwesome5 name="user-circle" size={32} color="#333" solid />
          </Pressable>
          {/* Menú desplegable */}
          {open && (
            <View style={styles.menu}>
              <Pressable
                onPress={() => {
                  setOpen(false);
                  router.replace("/");
                }}
              >
                <Text style={styles.menuItem}>Cerrar sesión</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Inicio</Text>

      {/* El botón de inventario */}
      <LinearGradient
        colors={["#3163D6", "rgba(100, 117, 156, 0.95)"]} // azul oscuro → azul claro
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.outerButton}
      >
        <Pressable style={styles.innerButton} onPress={() => router.push("..")}>
          <FontAwesome5 name="boxes" size={53.33} color="#3163D6" />
          <Text style={styles.buttonText}>Inventario</Text>
        </Pressable>
      </LinearGradient>

      {/* El botón de clientes */}
      <LinearGradient
        colors={["#3163D6", "rgba(100, 117, 156, 0.95)"]} // azul oscuro → azul claro
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.outerButton}
      >
        <Pressable style={styles.innerButton} onPress={() => router.push("..")}>
          <FontAwesome5 name="smile-beam" size={53.33} color="#3163D6" solid />
          <Text style={styles.buttonText}>Clientes</Text>
        </Pressable>
      </LinearGradient>

      {/* El botón de pedidos */}
      <LinearGradient
        colors={["#3163D6", "rgba(100, 117, 156, 0.95)"]} // azul oscuro → azul claro
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.outerButton}
      >
        <Pressable style={styles.innerButton} onPress={() => router.push("..")}>
          <FontAwesome5 name="shopping-bag" size={53.33} color="#3163D6" />
          <Text style={styles.buttonText}>Pedidos</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}
