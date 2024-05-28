import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ExcluirConta = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleExcluirContaPress = async () => {
    try {
      // Verifique se o email e a senha foram fornecidos
      if (!email || !senha) {
        Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
        return;
      }

      // Realize a exclusão da conta
      const response = await axios.delete('http://localhost:3001/usuarios', {
        data: { email, senha }
      });

      if (response.status === 200) {
        console.log('Conta excluída com sucesso');
        // Redirecionar para a tela de login após a exclusão da conta
        navigation.navigate('Login');
      } else {
        console.error('Erro ao excluir conta:', response.data);
        Alert.alert('Erro', 'Não foi possível excluir a conta. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro ao excluir conta:', error);
      if (error.response && error.response.status === 401) {
        Alert.alert('Erro', 'Email ou senha incorretos. Por favor, verifique suas credenciais.');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao excluir a conta. Por favor, tente novamente mais tarde.');
      }
    }
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={24} color="#525252" />
    </TouchableOpacity>

    <Text style={styles.subtitle}>Deseja excluir a conta?</Text>
    <Text style={styles.text}>Ao excluir seu perfil todos os seus dados serão apagados.</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#525252"
        value={email}
        onChangeText={setEmail}
      />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#525252"
        secureTextEntry={!senhaVisivel}
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setSenhaVisivel(!senhaVisivel)}>
        <Icon name={senhaVisivel ? 'eye-slash' : 'eye'} size={24} color="#525252" />
      </TouchableOpacity>
    </View>
    
    <TouchableOpacity style={styles.button} onPress={handleExcluirContaPress}>
      <Text style={styles.buttonText}>EXCLUIR CONTA</Text>
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
subtitle: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 15,
  color: '#000000',
},
text: {
  fontSize: 16,
  fontWeight: '400',
  marginBottom: 40,
  color: '#525252',
},
inputContainer: {
  marginBottom: 30,
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
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
  flex: 1,
},
eyeIcon: {
  position: 'absolute',
  right: 10,
},
button: {
  backgroundColor: '#fff',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#AB1902',
  width: '100%',
  marginTop: 60,
},
buttonText: {
  color: '#AB1902',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
});

export default ExcluirConta;