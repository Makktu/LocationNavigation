import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import MainButton from '../components/MainButton';

export default function MainScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate('OtherScreen');
  }

  return (
    <View style={styles.container}>
      <MainButton
        whenPressed={() => {
          pressHandler();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a5959',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
