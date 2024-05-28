import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Envios = ({ navigation }) => {
  const navigationItems = [
    { name: 'Home', icon: 'home', screen: 'Home', color: '#525252' },
    { name: 'Envios', icon: 'cube', screen: 'Envios', color: '#2B2D82' },
    { name: 'Plus', icon: 'plus', screen: 'CadastrarEscolha', color: '#FFFFFF' },
    { name: 'Route', icon: 'road', screen: 'Rotas', color: '#525252' },
    { name: 'User', icon: 'user', screen: 'Conta', color: '#525252' },
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


        <Text style={styles.sectionTitle}>Próximo Envio</Text>

        <View style={styles.bannerContainer}>
          <View style={styles.bannerIconContainer}>
            <Icon name="cube" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Envio</Text>
            <Text style={styles.bannerText}>
              Pacote Médio | Atibaia | 24/05
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Últimos Envios</Text>

        <View style={styles.bannerContainer}>
          <View style={styles.bannerIconContainer}>
            <Icon name="file-text" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Envio</Text>
            <Text style={styles.bannerText}>
              Pacote Pequeno | Atibaia | 12/05
            </Text>
          </View>
        </View>

        <View style={styles.bannerContainer}>
          <View style={styles.bannerIconContainer}>
            <Icon name="cube" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Envio</Text>
            <Text style={styles.bannerText}>
              Pacote Médio | Atibaia | 09/05
            </Text>
          </View>
        </View>

        <View style={styles.bannerContainer}>
          <View style={styles.bannerIconContainer}>
            <Icon name="shopping-cart" size={30} color="#FFFFFF" />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Envio</Text>
            <Text style={styles.bannerText}>
              Pacote Grande | Bragança Paulista | 04/05
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
  mainContent: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
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

export default Envios;
