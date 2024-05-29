import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const CadastroRota = () => {
  const navigation = useNavigation();

  const [nomeMotorista, setNomeMotorista] = useState('');
  const [numeroMotorista, setNumeroMotorista] = useState('');
  const [enderecoOrigem, setEnderecoOrigem] = useState('');
  const [tamanhoSuporte, setTamanhoSuporte] = useState('');
  const [enderecoFinal, setEnderecoFinal] = useState('');

  const handleCadastroRotaPress = async () => {
    const dadosRota = {
      nomeMotorista,
      numeroMotorista,
      enderecoOrigem,
      tamanhoSuporte,
      enderecoFinal,
    };

    await enviarDadosAoBanco(dadosRota);

    navigation.navigate('Rotas', dadosRota);
  };

  const enviarDadosAoBanco = async (dados) => {
    console.log('Enviando dados ao banco:', dados);
    // Simulação de envio de dados ao banco de dados
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#525252" />
        </TouchableOpacity>
        <Text style={styles.pageNumber}>1/1</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Icon name="question-circle" size={24} color="#2B2D82" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
        <Text style={styles.subtitle}>Cadastro de Rota</Text>

        <Text style={styles.label}>Nome do Motorista</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do motorista"
            placeholderTextColor="#525252"
            value={nomeMotorista}
            onChangeText={setNomeMotorista}
          />
        </View>

        <Text style={styles.label}>Número do Motorista</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Número do motorista"
            placeholderTextColor="#525252"
            value={numeroMotorista}
            onChangeText={setNumeroMotorista}
          />
        </View>

        <Text style={styles.label}>Endereço de Origem (Cidade)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cidade de origem"
            placeholderTextColor="#525252"
            value={enderecoOrigem}
            onChangeText={setEnderecoOrigem}
          />
        </View>

        <Text style={styles.label}>Tamanho do Produto que seu Veículo Suporta</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={() => setTamanhoSuporte('Pequeno')}>
            <View style={styles.circle}>
              <Icon name="file-text" size={30} color="#FAD740" />
            </View>
            <Text style={styles.cardText}>Pequeno</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => setTamanhoSuporte('Médio')}>
            <View style={styles.circle}>
              <Icon name="archive" size={30} color="#FAD740" />
            </View>
            <Text style={styles.cardText}>Médio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => setTamanhoSuporte('Grande')}>
            <View style={styles.circle}>
              <Icon name="shopping-cart" size={35} color="#FAD740" />
            </View>
            <Text style={styles.cardText}>Grande</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Informações do Destino Final</Text>

        <Text style={styles.label}>Endereço Final</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Endereço final"
            placeholderTextColor="#525252"
            value={enderecoFinal}
            onChangeText={setEnderecoFinal}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleCadastroRotaPress}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEF6',
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
  scrollContainer: {
    flex: 1,
    backgroundColor: '#EEEEF6',
  },
  scrollContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  input: {
    fontSize: 16,
    color: '#000',
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '30%',
    elevation: 2,
  },
  circle: {
    backgroundColor: '#2B2D82',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#525252',
    fontSize: 12,
  },
});

export default CadastroRota;