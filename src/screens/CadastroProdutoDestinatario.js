import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone FontAwesome
import { useNavigation } from '@react-navigation/native';

const CadastroProdutoDestinatario = () => {
  const navigation = useNavigation();

  const handleCadastroProdutoPacotePress = () => {
    navigation.navigate('CadastroProdutoPacote');
  };
  return (
    <View style={styles.container}>
      {/* Borda branca com seta, texto e ícone de ajuda */}
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#525252" />
        </TouchableOpacity>
        <Text style={styles.pageNumber}>2/5</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Icon name="question-circle" size={24} color="#2B2D82" />
        </TouchableOpacity>
      </View>
      {/* Fundo azul claro */}
      <View style={styles.middleContainer}>
        <Text style={styles.subtitle}>Dados do Destinatário</Text>
        <Text style={styles.label}>Nome completo</Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu nome completo"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <Text style={styles.label}>E-mail</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <Text style={styles.label}>Telefone</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu telefone"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      
        {/* Endereço de Entrega */}
        <Text style={styles.subtitle}>Endereço de Entrega</Text>
        <Text style={styles.label}>Logradouro</Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Logradouro da coleta"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <Text style={styles.label}>Bairro</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Bairro da coleta"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>

      <Text style={styles.label}>Cidade</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cidade da coleta"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <Text style={styles.label}>Estado</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Estado da coleta"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      </View>

      <View style={styles.bottomContainer}>
        {/* Botão "Próximo" */}
        <TouchableOpacity style={styles.nextButton} onPress={handleCadastroProdutoPacotePress}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##EEEEF6',
  },
  topContainer: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  middleContainer: {
    flex: 1,
    backgroundColor: '#EEEEF6',
    paddingHorizontal: 20,
  },
  bottomContainer: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 'auto',
  },
  pageNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B2D82',
  },
  helpButton: {
    marginLeft: 'auto',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#525252',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#2B2D82',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2B2D82',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CadastroProdutoDestinatario;
