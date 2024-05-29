import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const CadastroProduto = ({ navigation }) => {
  const [nomeRemetente, setNomeRemetente] = useState('');
  const [numeroRemetente, setNumeroRemetente] = useState('');
  const [enderecoColeta, setEnderecoColeta] = useState('');
  const [informacaoPacote, setInformacaoPacote] = useState('');
  const [tamanhoProduto, setTamanhoProduto] = useState('');

  const [nomeDestinatario, setNomeDestinatario] = useState('');
  const [numeroDestinatario, setNumeroDestinatario] = useState('');
  const [enderecoEntrega, setEnderecoEntrega] = useState('');

  const handleCadastroProdutoResumoPress = async () => {
    console.log('Dados a serem enviados:', {
      nomeRemetente,
      numeroRemetente,
      enderecoColeta,
      informacaoPacote,
      tamanhoProduto,
      nomeDestinatario,
      numeroDestinatario,
      enderecoEntrega,
    });
  
    try {
      const response = await axios.post("http://localhost:8081/api/produtos", {
        nomeRemetente: nomeRemetente,
        numeroRemetente: numeroRemetente,
        enderecoColeta: enderecoColeta,
        informacaoPacote: informacaoPacote,
        tamanhoProduto: tamanhoProduto,
        nomeDestinatario: nomeDestinatario,
        numeroDestinatario: numeroDestinatario,
        enderecoEntrega: enderecoEntrega,
      });
  
      console.log('Resposta da API:', response.data);
      if (response.status === 201) {
        console.log('Produto cadastrado com sucesso');
        navigation.navigate('Envios');
      } else {
        console.error('Erro ao cadastrar o produto:', response.data);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error.response ? error.response.data : error.message);
    }
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
        <Text style={styles.subtitle}>Cadastro de Pacote</Text>

        <Text style={styles.label}>Nome do Remetente</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do remetente"
            placeholderTextColor="#525252"
            value={nomeRemetente}
            onChangeText={setNomeRemetente}
          />
        </View>

        <Text style={styles.label}>Número do Remetente</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Número do remetente"
            placeholderTextColor="#525252"
            value={numeroRemetente}
            onChangeText={setNumeroRemetente}
          />
        </View>

        <Text style={styles.label}>Endereço de Coleta (Cidade)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cidade de coleta"
            placeholderTextColor="#525252"
            value={enderecoColeta}
            onChangeText={setEnderecoColeta}
          />
        </View>

        <Text style={styles.label}>Informação do Pacote</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="O que está mandando?"
            placeholderTextColor="#525252"
            value={informacaoPacote}
            onChangeText={setInformacaoPacote}
          />
        </View>

        <Text style={styles.label}>Tamanho do Produto</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={() => setTamanhoProduto('Pequeno')}>
            <View style={styles.circle}>
              <Icon name="file-text" size={30} color="#FAD740" />
            </View>
            <Text style={styles.cardText}>Pequeno</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => setTamanhoProduto('Médio')}>
            <View style={styles.circle}>
              <Icon name="archive" size={30} color="#FAD740" />
            </View>
            <Text style={styles.cardText}>Médio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => setTamanhoProduto('Grande')}>
            <View style={styles.circle}>
              <Icon name="shopping-cart" size={35} color="#FAD740" />
            </View>
            <Text style={styles.cardText}>Grande</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Informações do Destinatário</Text>

        <Text style={styles.label}>Nome do Destinatário</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do destinatário"
            placeholderTextColor="#525252"
            value={nomeDestinatario}
            onChangeText={setNomeDestinatario}
          />
        </View>

        <Text  style={styles.label}>Número do Destinatário</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Número do destinatário"
            placeholderTextColor="#525252"
            value={numeroDestinatario}
            onChangeText={setNumeroDestinatario}
          />
        </View>

        <Text style={styles.label}>Endereço de Entrega</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Endereço de entrega"
            placeholderTextColor="#525252"
            value={enderecoEntrega}
            onChangeText={setEnderecoEntrega}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleCadastroProdutoResumoPress}>
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

export default CadastroProduto;

