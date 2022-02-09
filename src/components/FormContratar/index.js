import React from "react"
import { Formcontratar, FormTag, Emailinput, Passwordinput, BtnEntrar, BtnText } from "./styles"
import { useNavigation } from '@react-navigation/native'



export default function FormContratar(){

    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('Home');
    }
    
    return(
        <Formcontratar>

            <FormTag>Nome Completo</FormTag>

            <Emailinput 
                placeholder="seuemail@email.com"></Emailinput>

<FormTag>Nome Completo</FormTag>

<Emailinput 
    placeholder="seuemail@email.com"></Emailinput>

<FormTag>Nome Completo</FormTag>

<Emailinput 
    placeholder="seuemail@email.com"></Emailinput>

<FormTag>Nome Completo</FormTag>

<Emailinput 
    placeholder="seuemail@email.com"></Emailinput>


            <Passwordinput
                placeholder="******"></Passwordinput>

                <BtnEntrar 
                    onPress={ handleSobreClick }>
                    <BtnText>Entrar</BtnText>
                </BtnEntrar>


        </Formcontratar>
        
    )
}