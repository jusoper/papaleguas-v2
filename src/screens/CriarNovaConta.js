import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const CriarNovaConta = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const handleCriarContaPress = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/usuarios', { nome, cpf, telefone, email });
      console.log('Resposta da API:', response.data);
      if (response.status === 201) {
        const userId = response.data.id;
        console.log('Navegando para CriarSenha com userId:', userId);
        navigation.navigate('CriarSenha', { userId });
      } else {
        console.error('Erro na criação do usuário:', response.data);
        Alert.alert('Erro', 'Ocorreu um erro ao criar a conta. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error.response ? error.response.data : error.message);
      Alert.alert('Erro', 'Ocorreu um erro ao criar a conta. Por favor, tente novamente mais tarde.');
    }
  };  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.subtitle}>Crie uma nova conta:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#525252"
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu CPF"
          placeholderTextColor="#525252"
          value={cpf}
          onChangeText={setCpf}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu número de telefone"
          placeholderTextColor="#525252"
          value={telefone}
          onChangeText={setTelefone}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.lastInput]}
          placeholder="Insira seu e-mail"
          placeholderTextColor="#525252"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCriarContaPress}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 999,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2B2D82',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 50,
    color: '#000000',
  },
  inputContainer: {
    marginBottom: 30,
    width: '100%',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#525252',
    borderWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 16,
    color: '#2B2D82',
  },
  lastInput: {
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2B2D82',
    width: '100%',
    position: 'absolute',
    bottom: 150,
    left: 20,
    zIndex: 998,
  },
  buttonText: {
    color: '#2B2D82',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CriarNovaConta;