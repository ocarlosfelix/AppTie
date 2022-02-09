import React from "react"
import Form_login from "./Form_login"
import Logo from '../../images/logobca.png'
import Logogoogle from '../../images/googlelogin.png'
import Logofb from '../../images/fblogin.png'
import {Login, Aptlogo, Textologin, Logingoogle, Loginfacebook, Textocadastrar} from '../Login_view/styles'


export default function Login_view() {
    return (
        <Login>
            <Aptlogo source={Logo} />
            <Textologin>Faça o login para pedir suas músicas</Textologin>
            <Form_login />
            <Logingoogle source={Logogoogle} />
            <Loginfacebook source={Logofb} />
            <Textocadastrar>Clique aqui para fazer o seu cadastro</Textocadastrar>

        </Login>

    )
}