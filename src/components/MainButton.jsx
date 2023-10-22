import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function MainButton({ whenPressed }) {
  return (
    <>
      <View style={styles.button}>
        <Pressable onPress={whenPressed}>
          <Text style={styles.buttonTextStyle}>GO !</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 30,
    color: 'whitesmoke',
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: '#bd1313',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
