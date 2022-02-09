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

<FormTag>Telefone para Contato</FormTag>

<Emailinput 
    placeholder="seuemail@email.com"></Emailinput>

<FormTag>Data do Evento</FormTag>

<Emailinput 
    placeholder="seuemail@email.com"></Emailinput>

<FormTag>Endereço do Evento</FormTag>

<Emailinput 
    placeholder="seuemail@email.com"></Emailinput>

<FormTag>Hora de Início do Show</FormTag>

<Emailinput 
    placeholder="seuemail@email.com"></Emailinput>

<FormTag>Duração do Show</FormTag>

<Emailinput 
    placeholder="seuemail@email.com"></Emailinput>



                <BtnEntrar 
                    onPress={ handleSobreClick }>
                    <BtnText>Entrar</BtnText>
                </BtnEntrar>


        </Formcontratar>
        
    )
}