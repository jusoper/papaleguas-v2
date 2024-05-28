import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Contato = () => {
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [messageLength, setMessageLength] = useState(0);
  const navigation = useNavigation();

  const handleSend = () => {
    if (userEmail && subject && messageLength > 0 && messageLength <= 1000) {
      const contactDetails = {
        email: userEmail,
        subject: subject,
        message: message,
      };

      axios.post('http://localhost:3001/send-email', contactDetails)
        .then(response => {
          Alert.alert('Sucesso', 'Email enviado com sucesso!');
          setUserEmail('');
          setSubject('');
          setMessage('');
          setMessageLength(0);
        })
        .catch(error => {
          console.error(error);
          Alert.alert('Erro', 'Falha ao enviar email.');
        });
    } else {
      Alert.alert('Erro', 'Todos os campos são obrigatórios e a mensagem deve conter entre 1 e 1000 caracteres.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.title}>Contato</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Seu Email"
          placeholderTextColor="#525252"
          value={userEmail}
          onChangeText={setUserEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Assunto"
          placeholderTextColor="#525252"
          value={subject}
          onChangeText={setSubject}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escreva sua mensagem..."
          placeholderTextColor="#525252"
          value={message}
          onChangeText={text => {
            setMessage(text);
            setMessageLength(text.length);
          }}
          multiline={true}
          maxLength={1000}
        />
      </View>
      
      <Text style={styles.charCount}>{messageLength} a 1000 caracteres</Text>

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B2D82',
    marginTop: 100,
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    borderColor: '#525252',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 16,
    color: '#2B2D82',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  charCount: {
    textAlign: 'right',
    fontSize: 14,
    color: '#525252',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2B2D82',
    width: '100%',
    marginTop: 40,
  },
  buttonText: {
    color: '#2B2D82',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Contato;