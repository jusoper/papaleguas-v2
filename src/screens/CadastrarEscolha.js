import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CadastrarEscolha = () => {
  const navigation = useNavigation();

  const handleCadastroProdutoRemetentePress = () => {
    navigation.navigate('CadastroProdutoRemetente');
  };

  const handleCadastroRotaOrigemPress = () => {
    navigation.navigate('CadastroRotaOrigem');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="times" size={30} color="#525252" />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/papaleguas_cadastro.png')}
        style={styles.image}
      />
      <Text style={styles.description}>
        Explore as possibilidades infinitas da logística moderna: cadastre um envio ou uma rota e simplifique sua vida.
      </Text>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleCadastroProdutoRemetentePress}>
        <Text style={styles.buttonTextLogin}>ENVIAR/RECEBER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonCadastro, { backgroundColor: '#FFF' }]} onPress={handleCadastroRotaOrigemPress}>
        <Text style={styles.buttonTextCadastro}>CADASTRE SUA ROTA</Text>
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
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 999,
  },
  image: {
    width: '90%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
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

export default CadastrarEscolha;