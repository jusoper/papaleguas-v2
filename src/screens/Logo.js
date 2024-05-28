import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const LogoScreen = ({ navigation }) => {
  // Carregar a fonte Bangers-Regular
  const [loaded] = useFonts({
    'Bangers-Regular': require('../assets/fonts/Bangers-Regular.ttf'),
  });

  // Verificar se a fonte está carregada
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Entrada');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return null; // Aguardando a fonte carregar
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/papaleguas.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Papa-Léguas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2D82',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  image: {
    width: 147,
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Bangers-Regular', // Usando a fonte carregada
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});

export default LogoScreen;