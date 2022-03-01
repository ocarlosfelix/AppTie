import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login/LoginScreen';
import CadastroScreen from '../pages/Cadastro/CadastroScreen';
import HomeScreen from '../pages/Home/HomeScreen';
import ProfileScreen from '../pages/Profile/ProfileScreen';
import PedirMusicaScreen from '../pages/PedirMusica/PedirMusicaScreen';
import SobreScreen from '../pages/Sobre/SobreScreen';
import RedesScreen from '../pages/Redes/RedesScreen';
import ContratarScreen from '../pages/Contratar/ContratarScreen';
import AreaBandaScreen from '../pages/AreaBanda/AreaBandaScreen';
import AdicionarRepertorioScreen from '../pages/AdicionarRepertorio/AdicionarRepertorioScreen';
import TestpageSceen from '../pages/Testpage/TestpageScreen';
import DocumentosScreen from '../pages/Documentos/DocumentosScreen';
import ReleaseScreen from '../pages/Release/ReleaseScreen';
import ProdutosScreen from '../pages/Produtos/ProdutosScreen';


const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator 
            screenOptions={{
            headerShown: false
          }}>
            <MainStack.Screen name="Login" component={LoginScreen}/>
                <MainStack.Screen name="Cadastro" component={CadastroScreen}/>
            <MainStack.Screen name="Home" component={HomeScreen}/>
            <MainStack.Screen name="Profile" component={ProfileScreen}/>
            <MainStack.Screen name="PedirMusica" component={PedirMusicaScreen}/>
            <MainStack.Screen name="Sobre" component={SobreScreen}/>
                <MainStack.Screen name="Documentos" component={DocumentosScreen}/>
                <MainStack.Screen name="Release" component={ReleaseScreen}/>
                <MainStack.Screen name="Produtos" component={ProdutosScreen}/>
            <MainStack.Screen name="Redes" component={RedesScreen}/>
            <MainStack.Screen name="Contratar" component={ContratarScreen}/>
            <MainStack.Screen name="AreaBanda" component={AreaBandaScreen}/>
                <MainStack.Screen name="AdicionarRepertorio" component={AdicionarRepertorioScreen}/>
            <MainStack.Screen name="Testpage" component={TestpageSceen}/>

            

        </MainStack.Navigator>
    )
}