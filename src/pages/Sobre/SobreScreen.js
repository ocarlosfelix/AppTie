import { React, View, Animated } from "react"
import HeaderComponent from '../../components/HeaderComponent/index'
import FloatingButton from "../../components/FloatingButton/floatingbutton"
import { useNavigation } from '@react-navigation/native'
import AppTieBG from '../../images/apptiebackground2.jpg'
import { StatusBar } from 'expo-status-bar';
import {AntDesign, Entypo } from '@expo/vector-icons'
import ProfilePicture from '../../images/bannerapt.jpg'

import { Homeview, 
         BtnVerdeClaro, 
         BtnVerdeEscuro, 
         BtnText, 
         ContadorContainer, 
         ShowsContainer,
         TextContador, 
         PedidosContainer, 
         MenuContainer, 
         BtnRedesSociais, 
         PainelRedesSociais, 
         ProfilePicImage, 
         ProfilePicText,
         ProfileScreenView
} from "./styles"

export default function SobreScreen() {

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

    const imgbg = AppTieBG

    return (       
        <Homeview source={imgbg}>

            <HeaderComponent/>

            <ProfileScreenView>
                    <ProfilePicImage source={ProfilePicture}></ProfilePicImage>
            </ProfileScreenView>

            <MenuContainer>
                <BtnVerdeClaro>
                        <BtnText>Documentos</BtnText>
                </BtnVerdeClaro>
                
                <BtnVerdeClaro>
                        <BtnText>Release</BtnText>
                </BtnVerdeClaro>

                <BtnVerdeClaro>
                        <BtnText>Produtos</BtnText>
                </BtnVerdeClaro>
            </MenuContainer>

            <FloatingButton style={{ bottom:100 }}/>

            <StatusBar style="auto" />
            
       </Homeview> 

    )
};