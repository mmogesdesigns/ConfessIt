import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-web";
import Icon from "react-native-vector-icons/Ionicons";

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Dashboard = ({ navigation }) => {
  const confessions = [
    { id: "1", text: "Body text" },
    { id: "2", text: "Body text" },
    { id: "3", text: "Body text" },
  ];

  const renderConfession = ({ item }) => (
    <View style={styles.confessionCard}>
      <Text style={styles.confessionText}>{item.text}</Text>
      <TouchableOpacity style={styles.deleteIcon}>
        <Icon name="trash-outline" size={24} color="#FF24BD" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-outline" size={30} color="#fff" />
        </TouchableOpacity>

        <Image
          style={styles.logo}
          source={require("../../assets/images/logo2.png")} // Adjust the path to your logo
        />

        <TouchableOpacity>
          <Icon name="add-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Today's confessions</Text>

      {/* Grey Background Container for Confessions */}
      <View style={styles.confessionsContainer}>
        <FlatList
          data={confessions}
          renderItem={renderConfession}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Dark background
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  confessionsContainer: {
    backgroundColor: "#3C3C3C",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
  },
  confessionCard: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 20,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 175,
  },
  confessionText: {
    color: "#FF24BD",
    fontSize: 16,
  },
  deleteIcon: {
    paddingLeft: 10,
  },
});

export default Dashboard;