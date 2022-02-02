import React from "react"
import { View, Text, Button, Image} from "react-native"
import Form_login from "../Form_login"
import Logo from '../../images/logobca.png'
import styles from "./style"


export default function Login_view(){
    return(
        <View style={styles.formBox}>
            <View>
                <Image source={Logo} />
            </View>
            <View>
                <Text>Faça o login para pedir suas músicas</Text>
            </View>
            <View>
                <Form_login/>
            </View>
            <View>
                <Text>Clique aqui para fazer o seu cadastro</Text>
            </View>
        </View>
        
    )
}