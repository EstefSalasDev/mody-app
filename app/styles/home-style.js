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
    marginTop: 40,
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

  innerButton: {
    backgroundColor: "#fff", // color interno del botón
    width: 223,
    height: 139,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#3163D6",
    width: 230,
    height: 147,
    alignSelf: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#3266D8",
  },

  gradientMenu: {
    width: 117,
    height: 39,
    position: "absolute",
    top: 0,
    right: 2,
    borderRadius: 5,
    paddingLeft: 9,
    justifyContent: "center",
  },

  menuItem: {
    fontSize: 13,
    color: "#fff",
  },
});
