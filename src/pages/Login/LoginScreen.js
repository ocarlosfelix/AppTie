import { React } from "react";
import FormLogin from "../../components/FormLogin/index";
import Logo from "../../images/logobca.png";
import AppTieBG from "../../images/apptiebackground.jpg";
import { Login, Aptlogo, Textologin } from "../Login/styles";
import { StatusBar } from "expo-status-bar";

const imgbg = AppTieBG;

export default function LoginScreen() {
  return (
    <Login source={imgbg}>
      <Aptlogo source={Logo} />

      <Textologin>Faça o login para pedir suas músicas</Textologin>

      <FormLogin />

      <StatusBar style="auto" />
    </Login>
  );
}
