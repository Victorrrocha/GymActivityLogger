import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FooterButtons = ({ navigation, acceptText }) => {
  return (
    <View style={styles.buttonsView}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{acceptText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '90%'
  },
  button: {
    padding: 10,
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default FooterButtons;