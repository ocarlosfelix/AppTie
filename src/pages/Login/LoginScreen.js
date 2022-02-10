import { React, ImageBackground } from "react"
import FormLogin from "../../components/FormLogin/index"
import Logo from '../../images/logobca.png'
import Logogoogle from '../../images/googlelogin.png'
import Logofb from '../../images/fblogin.png'
import AppTieBG from '../../images/apptiebackground.jpg'
import {Login, Aptlogo, Background, Textologin, Logingoogle, Loginfacebook, Textocadastrar} from '../Login/styles'
import { StatusBar } from 'expo-status-bar';


const imgbg = AppTieBG

export default function LoginScreen() {
    return (
        <Login source={imgbg}>
 
            <Aptlogo source={Logo} />
            <Textologin>Faça o login para pedir suas músicas</Textologin>
            <FormLogin />
            <Logingoogle source={Logogoogle} />
            <Loginfacebook source={Logofb} />
            <Textocadastrar>Clique aqui para fazer o seu cadastro</Textocadastrar>
            <StatusBar style="auto" />
        </Login>

    )
}