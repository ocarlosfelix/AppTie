import { React, useState } from "react"
import { Formlogin, Emailinput, Passwordinput, BtnEntrar, BtnText } from "./styles"
import { useNavigation } from '@react-navigation/native'
import { authentication } from '../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";


export default function FormLogin(){

// componente de navegação entre telas
    const navigation = useNavigation();

    const homeLinkClick = () => {
        navigation.navigate('Home');
    }

    const testLinkClick = () => {
        navigation.navigate('Testpage');
    }

//componente de autenticação de usuário
    const [isSignedin, setIsSinedin] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signInUser = ()=>{
       signInWithEmailAndPassword(authentication, email, password)
       .then((re)=>{
           setIsSinedin(true);
       })
       .catch((err)=>{
           console.log(err);
           Alert.alert("Dados Incorretos",
                        "Confira seus dados e tente novamente")
       })
    };
    
    return(
        <Formlogin>

            <Emailinput 
                placeholder="Email" 
                keyboardType="email-address" 
              onChangeText={text=>setEmail(text)}
                value={email}/>

            <Passwordinput 
                placeholder="Senha" 
                value={password} 
              onChangeText={text=>setPassword(text)}
                secureTextEntry={true}/>

                <BtnEntrar onPress={signInUser}>
                   
                    <BtnText>Entrar</BtnText>
                </BtnEntrar>

                <BtnEntrar 
                    onPress={ homeLinkClick }>
                    <BtnText>.noidlogin</BtnText>
                </BtnEntrar>

                <BtnEntrar 
                    onPress={ testLinkClick }>
                    <BtnText>.testpage</BtnText>
                </BtnEntrar>


        </Formlogin>
        
    )
}