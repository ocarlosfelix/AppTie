import { React, View, Animated } from "react"
import { Linking, Alert } from "react-native"
import HeaderComponent from '../../components/HeaderComponent/index'
import FloatingButton from "../../components/FloatingButton/floatingbutton"
import { useNavigation } from '@react-navigation/native'
import AppTieBG from '../../images/apptiebackground2.jpg'
import { StatusBar } from 'expo-status-bar';
import {AntDesign, Entypo } from '@expo/vector-icons'

import { Homeview, BtnVerdeClaro, BtnVerdeEscuro, 
    BtnText, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer, MenuContainer, BtnRedesSociais, PainelRedesSociais
} from "../../pages/Home/styles"

export default function HomeScreen() {

    const navigation = useNavigation();

    const SobreClickPedirMusica = () => {
        navigation.navigate('PedirMusica');
    }

    const SobreClickSobre = () => {
        navigation.navigate('Sobre');
    }

    const SobreClickRedes = () => {
        navigation.navigate('Redes');
    }

    const SobreClickContratar = () => {
        navigation.navigate('Contratar');
    }

    const SobreClickAreaBanda = () => {
        navigation.navigate('AreaBanda');
    }
//Links para redes sociais//
    const instagramURL = "https://www.instagram.com/appletiecwb/"

    const facebookURL = "https://www.facebook.com/appletiecwb"

    const youtubeURL = "https://www.youtube.com/channel/UCAgg2gy5a6A4aQkX9CayimA"

       
        const openUrl = async (url) => {
            const isSupported = await Linking.canOpenURL(url);
            if (isSupported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Vish, nem sei como abrir isso aí: ${url}`);
            }
            }


//-----------------------//
    const imgbg = AppTieBG

    return (       
        <Homeview source={imgbg}>

            <HeaderComponent/>

            <MenuContainer>

            <BtnVerdeClaro onPress={ SobreClickPedirMusica }>
                    <BtnText>Pedir Musica</BtnText>
            </BtnVerdeClaro>
            
            <BtnVerdeClaro onPress={ SobreClickSobre }>
                    <BtnText>Sobre a Banda</BtnText>
            </BtnVerdeClaro>

            <BtnVerdeClaro onPress={ SobreClickContratar }>
                    <BtnText>Contratar</BtnText>
            </BtnVerdeClaro>

            <PainelRedesSociais>
                <BtnRedesSociais 
                onPress={() => {openUrl(instagramURL)}}>
                                <AntDesign name="instagram" size={30} color="#fff" />
                </BtnRedesSociais>

                <BtnRedesSociais
                onPress={() => {openUrl(facebookURL)}}>
                                <Entypo name="facebook" size={30} color="#fff" />
                </BtnRedesSociais>

                <BtnRedesSociais
                onPress={() => {openUrl(youtubeURL)}}>
                                <AntDesign name="youtube" size={30} color="#fff" />
                </BtnRedesSociais>
            </PainelRedesSociais>

            <BtnVerdeEscuro onPress={ SobreClickAreaBanda }>
                    <BtnText>Área da Banda</BtnText>
            </BtnVerdeEscuro>

</MenuContainer>

            <FloatingButton style={{ bottom:100 }}/>
            <StatusBar style="auto" />
       </Homeview> 

    )
};