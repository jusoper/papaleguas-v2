import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { generateVerificationToken } from './tokenUtils';

const VerificarEmail = ({ route }) => {
  const { userId } = route.params;
  const navigation = useNavigation();
  const [tokens, setTokens] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const codeInputsRefs = useRef([]);
  const [correctToken, setCorrectToken] = useState('');

  useEffect(() => {
    fetchTokenFromServer();
  }, []);

  const fetchTokenFromServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/token');
      const data = await response.json();
      setCorrectToken(data.token);
      console.log('Token correto:', data.token);
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
    }
  };

  const handleRedefinirSenhaPress = () => {
    const insertedToken = tokens.join('').trim();
    console.log('Token inserido:', insertedToken);

    if (insertedToken === correctToken) {
      navigation.navigate('RedefinirSenha', { userId });
    } else {
      setError('Token errado');
      console.log('Token incorreto:', insertedToken);
    }
  };

  const handleCodeInputChange = (index, value) => {
    const newTokens = [...tokens];
    newTokens[index] = value;
    setTokens(newTokens);

    if (value !== '' && index < codeInputsRefs.current.length - 1) {
      codeInputsRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.title}>Insira o código de verificação que foi enviado ao seu e-mail:</Text>

      <View style={styles.codeContainer}>
        {tokens.map((token, index) => (
          <TextInput
            key={index}
            ref={(ref) => (codeInputsRefs.current[index] = ref)}
            style={styles.codeInput}
            maxLength={1}
            value={token}
            onChangeText={(value) => handleCodeInputChange(index, value)}
          />
        ))}
      </View>

      {error !== '' && <Text style={styles.errorMessage}>{error}</Text>}

      <Text style={styles.paragraph}>Não recebeu o código?</Text>

      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Reenviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRedefinirSenhaPress}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 999,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
    color: '#000000',
    textAlign: 'left',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1.5,
    borderColor: '#525252',
    width: 70,
    height: 80,
    textAlign: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  resendButton: {
    marginBottom: 40,
  },
  paragraph: {
    color: '#525252',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 10,
  },
  resendText: {
    color: '#2B2D82',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
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
    bottom: 200,
    left: 20,
    zIndex: 998,
  },
  buttonText: {
    color: '#2B2D82',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default VerificarEmail;