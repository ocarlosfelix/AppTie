import React from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import styles from "./style"


export default function Form_login(){
    return(
        <View>
            <View >
                <TextInput style={styles.input} 
                placeholder="seuemail@email.com"></TextInput>

                <TextInput style={styles.input} 
                placeholder="******"></TextInput>

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => validationLogin()}>
                <Text style={styles.textButtonStyle}>Entrar</Text>
                </TouchableOpacity>
                

                
            </View>

        </View>
        
    )
}