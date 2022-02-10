import { React, ImageBackground } from "react"
import FormCadastro from "../../components/FormCadastro/index"
import Logo from '../../images/logobca.png'
import Logogoogle from '../../images/googlelogin.png'
import Logofb from '../../images/fblogin.png'
import AppTieBG from '../../images/apptiebackground.jpg'
import {Login, Aptlogo, BtnCadastro, Textologin, Logingoogle, Loginfacebook, Textocadastrar} from '../Login/styles'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'

const imgbg = AppTieBG

export default function CadastroScreen() {

    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('Cadastro');
    }

    return (
        <Login source={imgbg}>
 
            <Aptlogo source={Logo} />
            <FormCadastro />
            <StatusBar style="auto" />
        </Login>

    )
}