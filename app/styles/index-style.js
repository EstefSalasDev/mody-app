import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    backgroundColor: "#fff",
    fontFamily: "Roboto",
  },

  logo: {
    width: 227,
    height: 99,
    alignSelf: "flex-start",
    marginBottom: 77,
  },

  title: {
    fontSize: 48,
    fontWeight: "800",
    textAlign: "left",
    color: "#3163D6",
    marginBottom: 4,
  },

  subtitle: {
    fontWeight: "300",
    fontSize: 20,
    textAlign: "left",
    color: "#5A6E9C",
    marginBottom: 41,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(184, 202, 243, 0.4)",
    paddingHorizontal: 0,
    paddingVertical: 10,
    marginBottom: 22,
    backgroundColor: "#fff",
  },

  icon: {
    marginRight: 15,
    color: "rgba(45, 92, 199, 0.62)",
  },

  input: {
    flex: 1,
    fontWeight: "300",
    fontSize: 16,
    color: "rgba(125, 154, 220, 0.84)",
  },

  button: {
    paddingVertical: 22,
    borderRadius: 12,
    marginBottom: 9,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
  },

  linkForgotPassword: {
    color: "#6186DA",
    textAlign: "right",
    marginBottom: 56,
    fontWeight: "400",
    fontSize: 16,
  },

  linkSignIn: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6186DA",
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
});
