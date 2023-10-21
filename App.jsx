import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Locations...</Text>
      <Text style={styles.text}>With Navigation!</Text>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#443f3f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'yellowgreen',
  },
});
