import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone FontAwesome
import { useNavigation } from '@react-navigation/native';

const CadastroProdutoPacote = () => {
  const navigation = useNavigation();

  const handleCadastroProdutoResumoPress = () => {
    navigation.navigate('CadastroProdutoResumo');
  };
  return (
    <View style={styles.container}>
      {/* Borda branca com seta, texto e ícone de ajuda */}
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#525252" />
        </TouchableOpacity>
        <Text style={styles.pageNumber}>3/4</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Icon name="question-circle" size={24} color="#2B2D82" />
        </TouchableOpacity>
      </View>
      {/* Fundo azul claro */}
      <View style={styles.middleContainer}>
        <Text style={styles.subtitle}>Dados do Pacote</Text>
        <Text style={styles.label}>O que você está mandando?</Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Descreva seu pacote"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <Text style={styles.label}>Qual valor aproximado do produto?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira um valor em R$"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <Text style={styles.label}>Qual o peso aproximado do produto?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira um peso em KG"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>

      <Text style={styles.label}>Qual o tamanho do produto?</Text>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.circle}>
            <Icon name="file-text" size={30} color="#FAD740" />
          </View>
          <Text style={styles.cardText}>Pequeno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.circle}>
            <Icon name="archive" size={30} color="#FAD740" />
          </View>
          <Text style={styles.cardText}>Médio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.circle}>
            <Icon name="shopping-cart" size={35} color="#FAD740" />
          </View>
          <Text style={styles.cardText}>Grande</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox}>
          <Icon name="check-square-o" size={24} color="#AB1902" />
          <Text style={styles.checkboxText}>Não estou enviando nenhum item restrito.</Text>
        </TouchableOpacity>
      </View>


      </View>

      <View style={styles.bottomContainer}>
        {/* Botão "Próximo" */}
        <TouchableOpacity style={styles.nextButton} onPress={handleCadastroProdutoResumoPress}>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8,
    color: '#AB1902',
    fontWeight: 'bold',
  },  
});

export default CadastroProdutoPacote;
