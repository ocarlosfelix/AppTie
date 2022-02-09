import React from "react"
import { Formcontratar, FormTag, Emailinput, BannerContratar, BtnEntrar, BtnText, BannerText } from "./styles"
import { useNavigation } from '@react-navigation/native'



export default function FormContratar(){

    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('Home');
    }
    
    return(
        
        <Formcontratar>

            <FormTag>Nome Completo</FormTag>
            <Emailinput placeholder="Seu Nome Completo" ></Emailinput>

            <FormTag>Telefone para Contato</FormTag>
            <Emailinput placeholder="(xx)xxxxx-xxxx" keyboardType="phone-pad"></Emailinput>

            <FormTag>Data do Evento</FormTag>
            <Emailinput placeholder="31/02/1937"></Emailinput>

            <FormTag>Endereço do Evento</FormTag>
            <Emailinput placeholder="Rua"></Emailinput>
            <Emailinput 
            placeholder="Bairro"></Emailinput>
            <Emailinput 
            placeholder="Cidade"></Emailinput>

            <FormTag>Hora de Início do Show</FormTag>
            <Emailinput placeholder="16:57"></Emailinput>

            <FormTag>Duração do Show</FormTag>
            <Emailinput placeholder="2 horas"></Emailinput>

            <BtnEntrar onPress={ handleSobreClick }>
            <BtnText>Entrar</BtnText>
            </BtnEntrar>


        </Formcontratar>
        
    )
}