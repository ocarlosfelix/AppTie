import React from "react"
import { Formlogin, Emailinput, Passwordinput, BtnEntrar, BtnText } from "./styles"
import { useNavigation } from '@react-navigation/native'



export default function Form_login(){

    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('MusicList');
    }
    
    return(
        <Formlogin>

            <Emailinput 
                placeholder="seuemail@email.com"></Emailinput>

            <Passwordinput
                placeholder="******"></Passwordinput>

                <BtnEntrar 
                    onPress={ handleSobreClick }>
                    <BtnText>Entrar</BtnText>
                </BtnEntrar>


        </Formlogin>
        
    )
}