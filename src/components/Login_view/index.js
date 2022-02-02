import React from "react"
import { View, Text, Button, Image} from "react-native"
import Form_login from "../Form_login"
import Logo from '../../images/logobca.png'
import Logogoogle from '../../images/googlelogin.png'
import Logofb from '../../images/fblogin.png'
import styles from "./style"


export default function Login_view(){
    return(
        <View style={styles.formBox}>
            <View>
                <Image source={Logo} style={styles.logoStyle} />
            </View>
            <View>
                <Text style={styles.textStyle}>Faça o login para pedir suas músicas</Text>
                <Form_login/>
            </View>

            <View>
                    <Image source={Logogoogle} style={styles.loginsocial}/>
            </View>

            <View>
                    <Image source={Logofb} style={styles.loginsocial} />
            </View>

            <View>
                <Text style={styles.textStyleCadastro}>Clique aqui para fazer o seu cadastro</Text>
            </View>
        </View>
        
    )
}
