import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const PoliticaDePrivacidade = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="times" size={30} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.title}>Política de Privacidade</Text>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.policyText}>
          Esta Política de Privacidade descreve como as informações pessoais são coletadas, usadas e compartilhadas quando você utiliza o aplicativo Papaléguas.
        </Text>
        <Text style={styles.sectionTitle}>Informações que Coletamos</Text>
        <Text style={styles.policyText}>
          Quando você utiliza o Papaléguas, coletamos automaticamente algumas informações sobre o seu dispositivo, incluindo o modelo do dispositivo, sistema operacional, identificadores exclusivos do dispositivo, informações sobre a rede móvel e informações sobre o desempenho do aplicativo. Além disso, quando você utiliza o Papaléguas, podemos coletar informações sobre as ações que você realiza dentro do Papaléguas e outras informações de uso.
        </Text>
        <Text style={styles.sectionTitle}>Como Utilizamos as Informações</Text>
        <Text style={styles.policyText}>
          As informações que coletamos são utilizadas para melhorar e otimizar o desempenho do Papaléguas, além de fornecer um serviço personalizado e melhor adaptado às suas necessidades. Também podemos utilizar essas informações para fins de análise e pesquisa, a fim de entender melhor como nossos usuários utilizam o Papaléguas e como podemos melhorá-lo.
        </Text>
        <Text style={styles.sectionTitle}>Compartilhamento de Informações</Text>
        <Text style={styles.policyText}>
          Não compartilhamos informações pessoais identificáveis publicamente ou com terceiros, exceto quando exigido por lei.
        </Text>
        <Text style={styles.sectionTitle}>Segurança</Text>
        <Text style={styles.policyText}>
          A segurança das suas informações pessoais é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para utilizar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
        </Text>
        <Text style={styles.sectionTitle}>Alterações</Text>
        <Text style={styles.policyText}>
          Esta Política de Privacidade pode ser atualizada de tempos em tempos para refletir mudanças em nossas práticas de informações. Recomendamos que você revise periodicamente esta página para obter as últimas informações sobre nossas práticas de privacidade.
        </Text>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.policyText}>
          Para mais informações sobre nossas práticas de privacidade, ou se você tiver alguma dúvida, entre em contato conosco pelo e-mail jusoper@gmail.com.
        </Text>
        <Text style={styles.lastUpdated}>Esta Política de Privacidade foi atualizada em {new Date().toLocaleDateString()}.</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 999,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: '#2B2D82',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#2B2D82',
  },
  policyText: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 5,
    marginBottom: 20,
    color: '#525252',
  },
  lastUpdated: {
    fontSize: 14,
    color: '#6B6B6B',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PoliticaDePrivacidade;
