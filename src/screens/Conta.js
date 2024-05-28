import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Conta = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const topics = [
    { name: 'Editar informações', icon: 'edit', screen: 'EditarPerfil' },
    { name: 'Alterar senha', icon: 'key', screen: 'AlterarSenha' },
    { name: 'Notificações', icon: 'bell-o', screen: 'Notificacoes' },
    { name: 'Política de Privacidade', icon: 'lock', screen: 'PoliticaDePrivacidade' },
    { name: 'Termos de Uso', icon: 'clipboard', screen: 'TermosDeUso' },
    { name: 'Ajuda', icon: 'question-circle', screen: 'Ajuda' },
    { name: 'Contato', icon: 'inbox', screen: 'Contato' },
    { name: 'Desejo excluir minha conta', icon: 'times', screen: 'ExcluirConta' },
    { name: 'Sair', icon: 'sign-out', screen: 'Sair', color: '#AB1902' },
  ];

  const navigationItems = [
    { name: 'Home', icon: 'home', screen: 'Home' },
    { name: 'Box', icon: 'cube', screen: 'Envios' },
    { name: 'Plus', icon: 'plus', screen: 'CadastrarEscolha' },
    { name: 'Route', icon: 'road', screen: 'Rotas' },
    { name: 'User', icon: 'user', screen: 'Conta', color: '#2B2D82' },
  ];

  return (
    <View style={styles.container}>
      {/* Fundo Azul */}
      <View style={styles.topBackground} />

      {/* Conteúdo */}
      <View style={styles.content}>
        {/* Ícone de notificação */}
        <View style={styles.notificationIconContainer}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Icon name="bell-o" size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* Foto do usuário */}
        <View style={styles.profilePictureContainer}>
        <Image
          style={styles.profilePicture}
          source={require('../assets/images/profile-picture.jpg')}
        />
        <Text style={styles.userName}>Julia</Text> 
      </View>

        {/* Box Branca */}
        <View style={styles.whiteBox}>
          {topics.map((topic, index) => (
            <TouchableOpacity
              key={index}
              style={styles.topic}
              onPress={() => navigation.navigate(topic.screen)}
            >
              <View style={styles.topicLeft}>
                <Icon 
                  name={topic.icon} 
                  size={20} 
                  color={topic.color || "#525252"} 
                  style={styles.topicIcon} 
                />
                <Text 
                  style={[
                    styles.topicText, 
                    topic.color ? { color: topic.color } : {}
                  ]}
                >
                  {topic.name}
                </Text>
              </View>
              <Icon name="angle-right" size={20} color="#525252" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Barra de Navegação */}
      <View style={styles.navigationBar}>
        {navigationItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.navItem, item.name === 'Plus' ? styles.plusItem : null]} 
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={item.name === 'Plus' ? styles.plusIconContainer : null}>
              <Icon 
                name={item.icon} 
                size={24} 
                color={item.name === 'User' ? '#2B2D82' : item.name === 'Plus' ? '#FFFFFF' : '#525252'} 
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEF6',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '45%',
    backgroundColor: '#2B2D82',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 90, // Espaço para a barra de navegação
  },
  notificationIconContainer: {
    position: 'absolute',
    top: 80,
    right: 20,
    zIndex: 1,
  },
  notificationIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 5,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#CCCCCC',
  },
  userName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  whiteBox: {
    marginTop: 30,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  topic: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  topicLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicIcon: {
    width: 30, 
    textAlign: 'center',
  },
  topicText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#525252',
    fontWeight: '600',
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 15,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusItem: {
    marginBottom: 0,
  },
  plusIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2B2D82',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Conta;