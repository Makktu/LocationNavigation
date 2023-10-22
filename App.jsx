import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import OtherScreen from './src/screens/OtherScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <SafeAreaView> */}
        <StatusBar style='light' />
        <Stack.Navigator>
          <Stack.Screen name='MainScreen' component={MainScreen} />
          <Stack.Screen name='OtherScreen' component={OtherScreen} />
        </Stack.Navigator>
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141313',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'yellowgreen',
  },
});
