import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackComponent from './components/StackComponent'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StackComponent/>
  );
}
