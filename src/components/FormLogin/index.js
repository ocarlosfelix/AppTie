import { React, useState } from "react"
import { Formlogin, Emailinput, Passwordinput, BtnEntrar, BtnText } from "./styles"
import { useNavigation } from '@react-navigation/native'
import { authentication } from '../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


export default function FormLogin(){

// componente de navegação entre telas
    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('Home');
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
                    onPress={ handleSobreClick }>
                    <BtnText>.noidlogin</BtnText>
                </BtnEntrar>


        </Formlogin>
        
    )
}