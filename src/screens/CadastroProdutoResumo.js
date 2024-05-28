import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone FontAwesome
import { useNavigation } from '@react-navigation/native';

const CadastroProdutoResumo = () => {
  const navigation = useNavigation();

  const handleRotasPress = () => {
    navigation.navigate('Rotas');
  };

  return (
    <View style={styles.container}>
      {/* Borda branca com seta, texto e ícone de ajuda */}
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#525252" />
        </TouchableOpacity>
        <Text style={styles.pageNumber}>4/4</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Icon name="question-circle" size={24} color="#2B2D82" />
        </TouchableOpacity>
      </View>
      {/* Fundo azul claro */}
      <View style={styles.middleContainer}>
        <Text style={styles.subtitle}>Resumo do Pedido</Text>
        <Text style={styles.label}>Endereços</Text>
        <View style={styles.inputContainer}>
        <Icon name="map-marker" size={20} color="#525252" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço do remetente"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="map-marker" size={20} color="#525252" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço do destinatário"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>


      <Text style={styles.label}>Detalhes do Pacote</Text>
      <View style={styles.inputContainer}>
        <Icon name="cube" size={20} color="#525252" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome do Pacote"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>


      </View>

      <View style={styles.bottomContainer}>
        {/* Botão "Próximo" */}
        <TouchableOpacity style={styles.nextButton} onPress={handleRotasPress}>
          <Text style={styles.buttonText}>Concluir</Text>
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
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#525252',
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    paddingLeft: 30,
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
  icon: {
    position: 'absolute',
    left: 15,
    top: 15,
  },  
});

export default CadastroProdutoResumo;
