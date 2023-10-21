import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function MainButton() {
  return (
    <>
      <Pressable>
        <Text style={styles.buttonTextStyle}>GO !</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 30,
    color: 'whitesmoke',
  },
});
