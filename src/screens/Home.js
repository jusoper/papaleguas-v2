
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const [ultimoEnvio, setUltimoEnvio] = useState(null);
  const [ultimaRota, setUltimaRota] = useState(null);

  const fetchUltimoEnvio = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/produtos');
      const envios = response.data;
      if (envios.length > 0) {
        const sortedEnvios = envios.sort((a, b) => b.id - a.id);
        setUltimoEnvio(sortedEnvios[0]);
      }
    } catch (error) {
      console.error('Erro ao buscar o último envio:', error);
    }
  };

  const fetchUltimaRota = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/rotas');
      const rotas = response.data;
      if (rotas.length > 0) {
        setUltimaRota(rotas[rotas.length - 1]);
      }
    } catch (error) {
      console.error('Erro ao buscar a última rota:', error);
    }
  };

  useEffect(() => {
    fetchUltimoEnvio();
    fetchUltimaRota(); // Carrega as rotas quando o componente for montado
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchUltimoEnvio();
    fetchUltimaRota(); // Recarrega as rotas toda vez que a tela receber foco
    }, [])
  );

  const navigationItems = [
    { name: 'Home', icon: 'home', screen: 'Home', color: '#2B2D82' },
    { name: 'Box', icon: 'cube', screen: 'Envios' },
    { name: 'Plus', icon: 'plus', screen: 'CadastrarEscolha' },
    { name: 'Route', icon: 'road', screen: 'Rotas' },
    { name: 'User', icon: 'user', screen: 'Conta' },
  ];

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

        <Text style={styles.sectionTitle}>Último Envio</Text>
        {ultimoEnvio ? (
          <View style={styles.box}>
            <View style={styles.iconContainer}>
              <Icon name="cube" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {ultimoEnvio.enderecoColeta} -> {ultimoEnvio.enderecoEntrega}
              </Text>
              <Text style={styles.text}>
                {ultimoEnvio.tamanhoProduto} | {ultimoEnvio.nomeRemetente} | {ultimoEnvio.numeroRemetente}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.noDataText}>Nenhum envio encontrado</Text>
        )}

        <Text style={styles.sectionTitle}>Última Rota</Text>
        {ultimaRota ? (
          <View style={styles.box}>
            <View style={styles.iconContainer}>
              <Icon name="road" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {ultimaRota.enderecoOrigem} -> {ultimaRota.enderecoFinal}
              </Text>
              <Text style={styles.text}>
                {ultimaRota.tamanhoSuporte} | {ultimaRota.nomeMotorista} | {ultimaRota.numeroMotorista}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.noDataText}>Nenhuma rota encontrada</Text>
        )}

        <Text style={styles.sectionTitle}>Acelere sua vida</Text>

        {/* Banner Azul */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerIconContainer}>
            <Image
              style={styles.bannerPicture}
              source={require('../assets/images/banner-papaleguas.png')}
            />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Entregas velozes, como o vento!</Text>
            <Text style={styles.bannerText}>
              Teste o nosso app e experimente o poder da eficiência em suas entregas!
            </Text>
          </View>
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
  bannerPicture: {
    width: 100,
    height: 100,
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
  noDataText: {
    marginTop: 10,
    fontSize: 16,
    color: '#525252',
  },
  bannerContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#2B2D82',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  bannerIconContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTextContainer: {
    width: '80%',
    paddingLeft: 10,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
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

export default Home;