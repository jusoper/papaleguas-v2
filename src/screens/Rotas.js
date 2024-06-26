import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const Rotas = ({ navigation }) => {
  const [rotas, setRotas] = useState([]);

  const fetchRotas = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/rotas');
      setRotas(response.data);
    } catch (error) {
      console.error('Erro ao buscar rotas:', error);
    }
  };

  useEffect(() => {
    fetchRotas(); // Carrega as rotas quando o componente for montado
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchRotas(); // Recarrega as rotas toda vez que a tela receber foco
    }, [])
  );

  const navigationItems = [
    { name: 'Home', icon: 'home', screen: 'Home', color: '#525252' },
    { name: 'Envios', icon: 'cube', screen: 'Envios', color: '#525252' },
    { name: 'Plus', icon: 'plus', screen: 'CadastrarEscolha', color: '#FFFFFF' },
    { name: 'Route', icon: 'road', screen: 'Rotas', color: '#2B2D82' },
    { name: 'User', icon: 'user', screen: 'Conta', color: '#525252' },
  ];

  // Ordena as rotas por ID em ordem decrescente
  const sortedRotas = [...rotas].sort((a, b) => b.id - a.id);

  return (
    <View style={styles.container}>
      {/* Conteúdo */}
      <View style={styles.content}>
        {/* Ícone de notificação */}
        <View style={styles.notificationIconContainer}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Icon name="bell-o" size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* Foto do usuário e nome */}
        <View style={styles.profilePictureContainer}>
          <Image
            style={styles.profilePicture}
            source={require('../assets/images/profile-picture.jpg')}
          />
          <Text style={styles.userName}>Julia</Text>
        </View>

        <Text style={styles.sectionTitle}>Próxima Rota</Text>

        {/* Renderiza a rota mais recente */}
        {sortedRotas.length > 0 ? (
          <View style={styles.box}>
            <View style={styles.iconContainer}>
              <Icon name="road" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {sortedRotas[0].enderecoOrigem} -> {sortedRotas[0].enderecoFinal}
              </Text>
              <Text style={styles.text}>
                {sortedRotas[0].tamanhoSuporte} | {sortedRotas[0].nomeMotorista} | {sortedRotas[0].numeroMotorista}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.noRotasText}>Nenhuma rota encontrada</Text>
        )}

        <Text style={styles.sectionTitle}>Últimas Rotas</Text>

        {/* Renderiza as rotas restantes */}
        {sortedRotas.slice(1).map((rota, index) => (
          <View key={index} style={styles.box}>
            <View style={styles.iconContainer}>
              <Icon name="road" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {rota.enderecoOrigem} -> {rota.enderecoFinal}
              </Text>
              <Text style={styles.text}>
                {rota.tamanhoSuporte} | {rota.nomeMotorista} | {rota.numeroMotorista}
              </Text>
            </View>
          </View>
        ))}
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
                color={
                  item.name === 'Plus' ? '#FFFFFF' : item.color || '#525252'
                }
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
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 60,
    paddingBottom: 90, // Espaço para a barra de navegação
    paddingHorizontal: 20, // Adiciona padding horizontal para dar espaço para a foto do perfil e nome
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CCCCCC',
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000000',
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#2B2D82',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  noRotasText: {
    marginTop: 20,
    fontSize: 16,
    color: '#525252',
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

export default Rotas;