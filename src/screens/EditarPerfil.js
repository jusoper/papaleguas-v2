import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const EditarPerfil = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('Julia Soares Pereira');
  const [email, setEmail] = useState('jusoper@gmail.com');
  const [cpf, setCpf] = useState('398.243.538-28');
  const [telefone, setTelefone] = useState('(11) 98830-9892');
  const [cep, setCep] = useState('12.953-616');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Pedir permissão para acessar a biblioteca de imagens
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos da permissão para acessar suas fotos!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSavePress = async () => {
    // Aqui você pode adicionar a lógica para salvar as alterações
    console.log('Salvando dados:', { nome, email, cpf, telefone, cep });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.title}>Editar Perfil</Text>
      
      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        )}
        <View style={styles.imageOverlay}>
          <Icon name="camera" size={24} color="#FFF" />
        </View>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#525252"
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#525252"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#525252"
          value={cpf}
          onChangeText={setCpf}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nº de telefone"
          placeholderTextColor="#525252"
          value={telefone}
          onChangeText={setTelefone}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.lastInput]}
          placeholder="CEP"
          placeholderTextColor="#525252"
          value={cep}
          onChangeText={setCep}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSavePress}>
        <Text style={styles.buttonText}>Salvar</Text>
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
    marginTop: 100,
    marginBottom: 20,
    color: '#000',
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#525252',
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#000',
  },
  lastInput: {
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2B2D82',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditarPerfil;