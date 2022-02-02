import React from "react"
import { View, Text, TextInput, Button, Image } from "react-native"
import Logogoogle from '../../images/googlelogin.png'
import Logofb from '../../images/fblogin.png'
import styles from "./style"


export default function Form_login(){
    return(
        <View style={styles.redesLogBox}>
            <View >
                <Text>Email</Text>
                <TextInput
                placeholder="seuemail@email.com"></TextInput>

                <Text>Senha</Text>
                <TextInput
                placeholder="******"></TextInput>

                <Button title="Entrar"/>
                
                <View>
                    <Image source={Logogoogle} />
                </View>

                <View>
                    <Image source={Logofb}/>
                </View>
                
            </View>

        </View>
        
    )
}