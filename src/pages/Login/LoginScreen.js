import React from "react"
import FormLogin from "../../components/FormLogin/index"
import Logo from '../../images/logobca.png'
import Logogoogle from '../../images/googlelogin.png'
import Logofb from '../../images/fblogin.png'
import {Login, Aptlogo, Textologin, Logingoogle, Loginfacebook, Textocadastrar} from '../Login/styles'


export default function LoginScreen() {
    return (
        <Login>
            <Aptlogo source={Logo} />
            <Textologin>Faça o login para pedir suas músicas</Textologin>
            <FormLogin />
            <Logingoogle source={Logogoogle} />
            <Loginfacebook source={Logofb} />
            <Textocadastrar>Clique aqui para fazer o seu cadastro</Textocadastrar>

        </Login>

    )
}