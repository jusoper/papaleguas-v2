import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EntradaScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleCriarNovaContaPress = () => {
    navigation.navigate('CriarNovaConta');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/papaleguas_login.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.description}>
        Desvende os segredos da eficiência logística: cadastre-se no nosso app e transforme a maneira como você gerencia suas entregas!
      </Text>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLoginPress}>
        <Text style={styles.buttonTextLogin}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonCadastro, { backgroundColor: '#FFF' }]} onPress={handleCriarNovaContaPress}>
        <Text style={styles.buttonTextCadastro}>CADASTRE-SE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2B2D82',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 80,
    color: '#525252',
  },
  buttonLogin: {
    backgroundColor: '#2B2D82',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2B2D82',
    width: '100%',
    marginBottom: 10,
  },
  buttonCadastro: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2B2D82',
    width: '100%',
  },
  buttonTextLogin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextCadastro: {
    color: '#2B2D82',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EntradaScreen;