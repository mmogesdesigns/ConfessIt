import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

export default function SignUp({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo2.png")}
        />
        <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Username</Text>
        <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        />
            <Text style={styles.subtitle}>Password</Text>
            <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            />
            <Text style={styles.subtitle}>Confirm Password</Text>
            <TextInput
            style={styles.input}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={styles.SignInbutton}>
                <Text
                  style={styles.SignInbuttonText}
                  onPress={() => navigation.navigate("Login")}
                >
                  Sign Up
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ForgotPasswordbutton}>
                <Text
                  style={styles.buttonText}
                  onPress={() => navigation.navigate("Login")}
                >
                  Already have an account?
                </Text>
            </TouchableOpacity>
        </View>
        </View>
      )
    }
    const styles = StyleSheet.create({
        container: {
          backgroundColor: "#000",
          justifyContent: 'flex-start',
          alignItems: "center",
          flex: 1,
        },
        logo: {
          width: 350,
          height: 300,
          resizeMode: "contain",
        },
        formContainer:{
            width: '80%',
            backgroundColor: '#3C3C3C',
            padding: 20,
            marginTop: 10,
            borderRadius: 10,
        },
        subtitle: {
          color: "#fff",
          fontWeight: 'thin',
          fontFamily: 'Sans-serif',
          fontSize: 16,
          marginBottom: 8
        },
        input: {
            backgroundColor: '#fff',
            color: '#fff',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 5,
            marginBottom: 15,
        },
        SignInbutton: {
          backgroundColor: "#FF24BD",
          fontWeight: 'bold',
          marginBottom: 20,
          borderRadius: 7,
          marginTop: 20,
          padding: 10
        },
        SignInbuttonText: {
          color: "#000",
          textAlign: 'center'
        },
        buttonText: {
            color: "#fff",
            textAlign: 'left',
            textDecorationLine: 'underline'
          },
      });