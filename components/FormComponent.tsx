import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import useForm from '../hooks/useForm';

export default function FormComponents({ route }: any) {

  const { name, surname } = route.params;
  const { state, onChangeText, onSubmit } = useForm({ name, surname })

  return (
    <View style={styles.mainForm}>
      <Text style={styles.TextStyle}> Data </Text>
      <TextInput style={styles.InputStyle}
        placeholder="Nombre"
        value={name}
        onChangeText={(texto) => onChangeText('name', texto)}
      />
      <TextInput style={styles.InputStyle}
        placeholder="Apellido"
        value={surname}
        onChangeText={(texto) => onChangeText('surname', texto)}
      />
      <Button title="Enviar" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainForm: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '80%',
    height: '60%',
    padding: 15,
    alignSelf: 'center',
    marginTop: 25
  },
  InputStyle: {
    padding: 5,
    marginBottom: 20,
    fontSize: 15
  },
  TextStyle: {
    fontSize: 25,
    marginBottom: 15
  }
});
