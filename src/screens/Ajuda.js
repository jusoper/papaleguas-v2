import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Ajuda = () => {
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handlePress = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const helpItems = [
    { title: 'Como editar minhas informações?', content: 'Para editar suas informações, acesse sua conta e clique no ícone de usuário na barra de navegação -> Editar informações.' },
    { title: 'É possível alterar meu CPF?', content: 'Não é possível alterar o CPF cadastrado devido a razões de segurança e conformidade com regulamentações governamentais. O CPF é uma informação sensível e única para cada indivíduo, e sua alteração pode acarretar em problemas de autenticação e verificação de identidade.' },
    { title: 'Desejo excluir a conta', content: 'Para excluir a conta, acesse sua conta e clique no ícone de usuário na barra de navegação -> Desejo excluir minha conta' },
    { title: 'Posso entrar em contato com outro usuário fora do aplicativo?', content: 'Por motivos de segurança e para garantir uma experiência confiável para todos os usuários, não recomendamos entrar em contato com outros usuários fora do aplicativo. Ao fazê-lo, perdemos a capacidade de monitorar e controlar as interações, o que pode resultar em situações indesejadas. Sugerimos utilizar o chat do Papaléguas para todas as comunicações relacionadas ao aplicativo, pois isso nos permite garantir a segurança e integridade das conversas.' },
    { title: 'O que acontece se não achar uma carona?', content: 'Extornaremos seu dinheiro em até 5 dias úteis.' },
    { title: 'Posso ser usuário e motorista?', content: 'Sim, no Papaléguas você pode enviar suas entregas e ser um motorista carona ao mesmo tempo.' },
    { title: 'Consigo usar o Papaléguas na mesma cidade?', content: 'Por enquanto essa opção ainda não está disponível, mas aguarde as próximas atualizações do App.' },
    { title: 'Quais dados são coletados pelo App?', content: 'Favor ler os Termos de Uso e Política de Privacidade.' },
    { title: 'Existe algum telefone de contato?', content: 'Não, apenas o e-mail jusoper@gmail.com.' },
    { title: 'Quem criou o App?', content: 'Julia Soares Pereira -> se tiver dúvidas entrar em contato pelo e-mail jusoper@gmail.com.' },
    { title: 'Por onde avaliar o App?', content: 'Sugestõe e feedbacks pelo e-mail.' },
  ];

  const filteredHelpItems = helpItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>
      <Text style={styles.header}>Ajuda</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#525252" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar artigos de ajuda"
          placeholderTextColor="#525252"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
          {filteredHelpItems.map((item, index) => (
            <View key={index} style={styles.item}>
              <TouchableOpacity onPress={() => handlePress(index)} style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Icon name={expanded === index ? "angle-up" : "angle-down"} size={24} color="#525252" />
              </TouchableOpacity>
              {expanded === index && (
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>{item.content}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contato')}>
        <Text style={styles.buttonText}>ENTRAR EM CONTATO POR E-MAIL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B2D82',
    marginTop: 80,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 999,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#525252',
    marginLeft: 10,
  },
  searchIcon: {
    marginLeft: 0,
  },
  contentContainer: {
    flex: 1,
    marginBottom: 80, // Space for the button
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 80, // Ensure content can scroll above button
  },
  item: {
    marginBottom: 20,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#525252',
    maxWidth: '90%',
  },
  itemContent: {
    paddingVertical: 15,
  },
  itemText: {
    color: '#525252',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2B2D82',
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    zIndex: 998,
  },
  buttonText: {
    color: '#2B2D82',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Ajuda;