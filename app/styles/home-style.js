import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    backgroundColor: "#fff",
    fontFamily: "Roboto",
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  logo: {
    width: 124,
    height: 54,
    alignSelf: "flex-start",
    marginBottom: 77,
  },

  title: {
    fontSize: 48,
    fontWeight: "700",
    textAlign: "center",
    color: "#3163D6",
    marginBottom: 4,
  },

  subtitle: {
    fontWeight: "400",
    fontSize: 32,
    textAlign: "center",
    color: "#16326E",
    marginBottom: 44,
  },

  outerButton: {
    borderRadius: 10,
    width: 230,
    height: 147,
    alignSelf: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  innerButton: {
    backgroundColor: "#fff", // color interno del botón
    width: 223,
    height: 139,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#3266D8",
  },

  menu: {
    position: "absolute",
    top: 40,
    right: 0,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 5, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  menuItem: {
    fontSize: 16,
    color: "#333",
  },
});
