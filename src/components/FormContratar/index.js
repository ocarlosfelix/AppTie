import React from "react"
import { Formcontratar, FormTag, Emailinput, BannerContratar, 
    BtnEnviar, BtnText, BannerText, EnderecoContainer, BairroCidadeContainer, 
    Telefoneinput, Bairroinput, Cidadeinput } from "./styles"
import { useNavigation } from '@react-navigation/native'
import DateTimePick from '../../components/DateTimePicker/index';



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
            <Telefoneinput placeholder="(xx)xxxxx-xxxx" keyboardType="phone-pad" textContentType="telephoneNumber"></Telefoneinput>

            <DateTimePick/>

            <FormTag>Duração do Show</FormTag>
            <Emailinput placeholder="2 horas"></Emailinput>           

            <FormTag>Endereço do Evento</FormTag>
            <EnderecoContainer>
                
                <Emailinput placeholder="Rua"></Emailinput>
            
                <BairroCidadeContainer>
                    <Bairroinput placeholder="Bairro"></Bairroinput>
                    <Cidadeinput placeholder="Cidade"></Cidadeinput>
                </BairroCidadeContainer>
            </EnderecoContainer>

            <BtnEnviar onPress={ handleSobreClick }>
            <BtnText>Enviar</BtnText>
            </BtnEnviar>


        </Formcontratar>
        
    )
}