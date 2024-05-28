import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../screens/Logo.js';
import Conta from '../screens/Conta.js';
import Entrada from '../screens/Entrada.js';
import Login from '../screens/Login.js';
import CriarNovaConta from '../screens/CriarNovaConta.js';
import ExcluirConta from '../screens/ExcluirConta.js';
import EsqueciASenha from '../screens/EsqueciASenha.js';
import VerificarEmail from '../screens/VerificarEmail.js';
import CriarSenha from '../screens/CriarSenha.js';
import RedefinirSenha from '../screens/RedefinirSenha.js';
import AlterarSenha from '../screens/AlterarSenha.js';
import CadastrarEscolha from '../screens/CadastrarEscolha.js';
import CadastroProdutoRemetente from '../screens/CadastroProdutoRemetente.js';
import CadastroProdutoDestinatario from '../screens/CadastroProdutoDestinatario.js';
import CadastroProdutoPacote from '../screens/CadastroProdutoPacote.js';
import CadastroProdutoResumo from '../screens/CadastroProdutoResumo.js';
import PoliticaDePrivacidade from '../screens/PoliticaDePrivacidade.js';
import TermosDeUso from '../screens/TermosDeUso.js';
import Ajuda from '../screens/Ajuda.js';
import Contato from '../screens/Contato.js';
import Home from '../screens/Home.js';
import Envios from '../screens/Envios.js';
import Rotas from '../screens/Rotas.js';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="Entrada" component={Entrada} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CriarNovaConta" component={CriarNovaConta} />
        <Stack.Screen name="ExcluirConta" component={ExcluirConta} />
        <Stack.Screen name="EsqueciASenha" component={EsqueciASenha} />
        <Stack.Screen name="VerificarEmail" component={VerificarEmail} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
        <Stack.Screen name="AlterarSenha" component={AlterarSenha} />
        <Stack.Screen name="CriarSenha" component={CriarSenha} />
        <Stack.Screen name="CadastrarEscolha" component={CadastrarEscolha} />
        <Stack.Screen name="CadastroProdutoRemetente" component={CadastroProdutoRemetente} />
        <Stack.Screen name="CadastroProdutoDestinatario" component={CadastroProdutoDestinatario} />
        <Stack.Screen name="CadastroProdutoPacote" component={CadastroProdutoPacote} />
        <Stack.Screen name="CadastroProdutoResumo" component={CadastroProdutoResumo} />
        <Stack.Screen name="PoliticaDePrivacidade" component={PoliticaDePrivacidade} />
        <Stack.Screen name="TermosDeUso" component={TermosDeUso} />
        <Stack.Screen name="Ajuda" component={Ajuda} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Envios" component={Envios} />
        <Stack.Screen name="Rotas" component={Rotas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
