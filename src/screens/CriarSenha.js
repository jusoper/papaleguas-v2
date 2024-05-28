import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const CriarSenha = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params; // Obtém o ID do usuário dos parâmetros de navegação

  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleCadastrarPress = async () => {
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/usuarios/senha', { userId, senha });
      console.log('Resposta da API:', response.data);
      if (response.status === 200) {
        console.log('Senha atualizada com sucesso');
        navigation.navigate('Login');
      } else {
        console.error('Erro ao atualizar a senha:', response.data);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error.response ? error.response.data : error.message);
    }
  };

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.subtitle}>Crie uma senha.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
          secureTextEntry={!senhaVisivel}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={toggleSenhaVisivel} style={styles.iconContainer}>
          <Icon name={senhaVisivel ? 'eye-slash' : 'eye'} size={24} color="#525252" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
          secureTextEntry={!senhaVisivel}
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
        />
        <TouchableOpacity onPress={toggleSenhaVisivel} style={styles.iconContainer}>
          <Icon name={senhaVisivel ? 'eye-slash' : 'eye'} size={24} color="#525252" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastrarPress}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
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
    zIndex: 999, // Ajuste a ordem de empilhamento conforme necessário
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#525252',
    borderWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 16,
    color: '#2B2D82',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
  placeholder: {
    fontSize: 14,
    fontWeight: '600',
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

export default CriarSenha;