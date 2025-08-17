import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Toptabs");
  };

  return (
    <LinearGradient colors={['#3E2723', '#5D4037']} style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.logoContainer}>
        <Image
          source={{ uri: "https://t4.ftcdn.net/jpg/06/12/51/91/360_F_612519151_vBNCUsSdVREgCyglgEWlI2ftOVjFVIOg.jpg" }} // Replace with your online image URI
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>Welcome to</Text>
          <Text style={styles.logoText}>☕️ COFFEE TIME ☕️</Text>
        </View>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#BDBDBD"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>☕️LOGIN ☕️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 20,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  logoText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputView: {
    backgroundColor: "rgba(121, 85, 72, 0.8)",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  textInput: {
    flex: 1,
    height: 50,
    color: "#FFF",
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#795548",
    shadowColor: "#5D4037",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.46,
    elevation: 9,
  },
  loginText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#4E342E",
    shadowColor: "#3E2723",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.46,
    elevation: 9,
  },
  registerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
