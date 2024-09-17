import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function SignUp({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        placeholder="Enter your username"
        placeholderTextColor="#666"
        />
            <Text style={styles.subtitle}>Password</Text>
            <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor="#666"
            secureTextEntry={!showPassword}
            />
            <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
            >
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color='#666' />
            </TouchableOpacity>
            <Text style={styles.subtitle}>Confirm Password</Text>
            <TextInput
            style={styles.input}
            value={confirmPassword}
            secureTextEntry={!showConfirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm your password"
            placeholderTextColor="#666"
            />
            <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon2}
            >
            <Icon name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color='#666' />
            </TouchableOpacity>
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
        eyeIcon: {
          paddingHorizontal: 30,
          paddingVertical: 115,
          position: 'absolute',
          right: 0
        },
        eyeIcon2: {
          paddingHorizontal: 30,
          paddingVertical: 195,
          position: 'absolute',
          right: 0
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
            color: '#000',
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