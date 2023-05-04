import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../views/Main'
import UserInfo from '../views/UserInfo';

const Stack = createNativeStackNavigator();

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} options={{title: "Usuarios"}} />
        <Stack.Screen name="UserInfo" component={UserInfo} options={{title: "Datos de usuario"}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}