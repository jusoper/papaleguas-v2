import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TermosDeUso = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="times" size={30} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.title}>Termos de Uso</Text>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.policyText}>
          Bem-vindo ao aplicativo Papaléguas!
        </Text>
        <Text style={styles.policyText}>
          Estes Termos de Uso regem o uso do aplicativo Papaléguas e todos os serviços oferecidos por ele. Ao acessar ou utilizar o aplicativo, você concorda em obedecer a estes termos. Se você não concorda com algum destes termos, por favor, não utilize o aplicativo.
        </Text>
        <Text style={styles.sectionTitle}>1. Uso do Aplicativo</Text>
        <Text style={styles.policyText}>
          Você concorda em usar o aplicativo Papaléguas apenas para fins legais e de acordo com estes Termos de Uso. Você não deve usar o aplicativo de qualquer forma que possa danificar, desabilitar, sobrecarregar ou comprometer a segurança do mesmo, ou interferir com o uso de qualquer outra parte do aplicativo.
        </Text>
        <Text style={styles.sectionTitle}>2. Conta do Usuário</Text>
        <Text style={styles.policyText}>
          Para acessar determinados recursos do aplicativo, você pode ser solicitado a fornecer informações pessoais ou criar uma conta. Você é responsável por manter a confidencialidade das suas credenciais de conta e por todas as atividades que ocorrerem sob sua conta.
        </Text>
        <Text style={styles.sectionTitle}>3. Conteúdo do Usuário</Text>
        <Text style={styles.policyText}>
          Ao utilizar o aplicativo, você pode enviar conteúdo, como mensagens, comentários ou avaliações. Você é o único responsável por qualquer conteúdo que você fornecer e concorda em não fornecer qualquer conteúdo que viole os direitos de propriedade intelectual de terceiros ou seja de outra forma ilegal, ofensivo ou prejudicial.
        </Text>
        <Text style={styles.sectionTitle}>4. Propriedade Intelectual</Text>
        <Text style={styles.policyText}>
          O aplicativo Papaléguas e todo o seu conteúdo, recursos e funcionalidades são propriedade da nossa empresa ou de nossos licenciadores e estão protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
        </Text>
        <Text style={styles.sectionTitle}>5. Limitação de Responsabilidade</Text>
        <Text style={styles.policyText}>
          Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequentes ou punitivos decorrentes do uso ou incapacidade de usar o aplicativo.
        </Text>
        <Text style={styles.sectionTitle}>6. Alterações nos Termos de Uso</Text>
        <Text style={styles.policyText}>
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Se fizermos alterações, iremos notificá-lo por meio do aplicativo ou por outros meios razoáveis. O uso continuado do aplicativo após tais modificações constitui sua aceitação dos novos termos.
        </Text>
        <Text style={styles.sectionTitle}>7. Contato</Text>
        <Text style={styles.policyText}>
          Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco pelo e-mail jusoper@gmail.com.
        </Text>
        <Text style={styles.lastUpdated}>Estes Termos de Uso foram atualizados em {new Date().toLocaleDateString()}.</Text>
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

export default TermosDeUso;