import { React, ImageBackground, useState, useEffect } from "react"
import FormLogin from "../../components/FormLogin/index"
import Logo from '../../images/logobca.png'
import Logogoogle from '../../images/googlelogin.png'
import Logofb from '../../images/fblogin.png'
import AppTieBG from '../../images/apptiebackground.jpg'
import {Login, Aptlogo, BtnCadastro, BtnLogingoogle, BtnLoginfacebook, Textologin, Logingoogle, Loginfacebook, Textocadastrar} from '../Login/styles'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import {AsyncStorage} from '@react-native-async-storage/async-storage';



const imgbg = AppTieBG

export default function LoginScreen() {

    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('Cadastro');
    }



    return (
        <Login source={imgbg}>
 
            <Aptlogo source={Logo} />
            
            
            <Textologin>Faça o login para pedir suas músicas</Textologin>
            
            
            <FormLogin />
            
            <BtnLogingoogle>
                <Logingoogle source={Logogoogle} />
            </BtnLogingoogle>
            
            <BtnLoginfacebook>
                <Loginfacebook source={Logofb} />
            </BtnLoginfacebook>
            
            <BtnCadastro onPress={ handleSobreClick }>
                <Textocadastrar>Clique aqui para fazer o seu cadastro</Textocadastrar>
            </BtnCadastro>
            <StatusBar style="auto" />
        </Login>

    )
}