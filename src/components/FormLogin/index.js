import { React, useState } from "react";
import Logogoogle from "../../images/googlelogin.png";
import { useNavigation } from "@react-navigation/native";
import { authentication } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import Logofb from "../../images/fblogin.png";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import {
  Formlogin,
  Emailinput,
  Passwordinput,
  BtnEntrar,
  BtnText,
  BtnLoginfacebook,
  Loginfacebook,
  BtnLogingoogle,
  Logingoogle,
  BtnCadastro,
  Textocadastrar,
} from "./styles";

export default function FormLogin() {
  // componente de navegação entre telas
  const navigation = useNavigation();

  const homeLinkClick = () => {
    navigation.navigate("Home");
  };

  const testLinkClick = () => {
    navigation.navigate("Testpage");
  };

  const handleSobreClick = () => {
    navigation.navigate("Cadastro");
  };

  //componente de autenticação de usuário
  const [isSignedin, setIsSinedin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        setIsSinedin(true);
        homeLinkClick();
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Dados Incorretos", "Confira seus dados e tente novamente");
      });
  };

  return (
    <Formlogin>
      <Emailinput
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Passwordinput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <BtnEntrar onPress={signInUser}>
        <BtnText>Entrar</BtnText>
      </BtnEntrar>

      <BtnEntrar onPress={homeLinkClick}>
        <BtnText>.noidlogin</BtnText>
      </BtnEntrar>

      <BtnEntrar onPress={testLinkClick}>
        <BtnText>.testpage</BtnText>
      </BtnEntrar>

      <BtnLogingoogle>
        <Logingoogle source={Logogoogle} />
      </BtnLogingoogle>

      <BtnLoginfacebook>
        <Loginfacebook source={Logofb} />
      </BtnLoginfacebook>

      <BtnCadastro onPress={handleSobreClick}>
        <Textocadastrar>Clique aqui para fazer o seu cadastro</Textocadastrar>
      </BtnCadastro>
    </Formlogin>
  );
}
