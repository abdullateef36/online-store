import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 20,
      color: '#000',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Screen</Text>
    </View>
  );
};

export default AccountScreen;
