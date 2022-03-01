import { React, useState } from "react"
import { authentication } from '../../config/firebase';
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'
import { doc, setDoc } from "firebase/firestore";

import { Formcadastro, 
         Emailinput, 
         Passwordinput, 
         BtnEntrar, 
         BtnText, 
         FormTag,
         Telefoneinput,  
         InputText,
         Scroll} from "./styles"
import { collection, Firestore } from "firebase/firestore/lite";
import { FirebaseError } from "firebase/app";


export default function FormCadastro(){

// componente de navegação entre telas
    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('Home');
    }
    
//componente de registro de usuário
    const [isSignedin, setIsSinedin] = useState(false);
    const [name,setName] = useState('');
    const [nick,setNick] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [userUid,setUserUid] = useState();

const registerUser = ()=>{
    createUserWithEmailAndPassword(authentication, email, password)
    .then((re)=>{
        console.log(re);
        setIsSinedin=(true);
    })
    .catch((re)=>{
        console.log(re);
    })
};



    return(
        <Scroll>
        <Formcadastro>

            <FormTag>Nome Completo</FormTag>
            <InputText 
                placeholder="Seu Nome Completo"
                onChangeText={text=>setName(text)}/>

            <FormTag>Apelido</FormTag>
            <InputText 
                placeholder="Como podemos te chamar?"
                onChangeText={text=>setNick(text)}/>

            <FormTag>Telefone para Contato</FormTag>
            <Telefoneinput 
                placeholder="(xx)xxxxx-xxxx" 
                keyboardType="phone-pad" 
                onChangeText={text=>setPhone(text)}
                textContentType="telephoneNumber"/>

            <FormTag>Email</FormTag>
            <Emailinput 
                placeholder="Email" 
                keyboardType="email-address" 
                onChangeText={text=>setEmail(text)}
                value={email}/>

            <FormTag>Senha</FormTag>
            <Passwordinput 
                placeholder="Senha" 
                value={password} 
                onChangeText={text=>setPassword(text)}
                secureTextEntry={true}/>

            <BtnEntrar
                onPress={registerUser}
                >
                    <BtnText>Enviar</BtnText>
            </BtnEntrar>


        </Formcadastro>
        </Scroll>
    )
}