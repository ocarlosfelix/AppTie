import React from "react"
import { Formcadastro, 
         Emailinput, 
         Passwordinput, 
         BtnEntrar, 
         BtnText, 
         FormTag,
         Telefoneinput,  
         InputText} from "./styles"
import { useNavigation } from '@react-navigation/native'



export default function FormCadastro(){

    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('Home');
    }
    
    return(
        <Formcadastro>

            <FormTag>Nome Completo</FormTag>
            <InputText placeholder="Seu Nome Completo" ></InputText>

            <FormTag>Apelido</FormTag>
            <InputText placeholder="Como podemos te chamar?" ></InputText>

            <FormTag>Telefone para Contato</FormTag>
            <Telefoneinput placeholder="(xx)xxxxx-xxxx" keyboardType="phone-pad" textContentType="telephoneNumber"></Telefoneinput>

            <FormTag>Email</FormTag>
            <Emailinput placeholder="seuemail@digiteaqui.com.br" ></Emailinput>
            <FormTag>Senha</FormTag>
            <Passwordinput placeholder="******">Senha</Passwordinput>
            <FormTag>Confirme a sua senha</FormTag>
            <Passwordinput placeholder="******">Confirme sua senha</Passwordinput>

                <BtnEntrar 
                    onPress={ handleSobreClick }>
                    <BtnText>Enviar</BtnText>
                </BtnEntrar>


        </Formcadastro>
        
    )
}