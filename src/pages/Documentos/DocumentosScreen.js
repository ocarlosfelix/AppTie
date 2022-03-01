import { React, View, Animated } from "react"
import HeaderComponent from '../../components/HeaderComponent/index'
import FloatingButton from "../../components/FloatingButton/floatingbutton"
import { useNavigation } from '@react-navigation/native'
import AppTieBG from '../../images/apptiebackground2.jpg'
import { StatusBar } from 'expo-status-bar';
import {AntDesign, Entypo } from '@expo/vector-icons'
import ProfilePicture from '../../images/bannerapt.jpg'

import { Sobreview, 
         BtnVerdeClaro, 
         HeaderText,
         DescriptText,
         BtnText,
         MenuContainer,
         ProfilePicImage,
         ProfileScreenView,
         DescriptContainer,
         BtnDescript
} from "./styles"

export default function DocumentosScreen() {

    const navigation = useNavigation();

        const SobreClickDocumentos = () => {
            navigation.navigate('Documentos');
        }
        const SobreClickRelease = () => {
            navigation.navigate('Release');
        }
        const SobreClickProdutos = () => {
            navigation.navigate('Produtos');
        }

    const imgbg = AppTieBG

    return (       
        <Sobreview source={imgbg}>

            <HeaderComponent/>

            <ProfileScreenView>
                    <HeaderText>DOCUMENTOS</HeaderText>
                    <DescriptContainer>   
                        <DescriptText>Se você chegou até aqui, provavelmente está </DescriptText>
                        <DescriptText>querendo saber um pouco mais sobre a parte técnica dos nossos shows.</DescriptText>
                        <DescriptText>Aqui você encontrará todos os detalhes necessários. </DescriptText>
                        <DescriptText>Se sentir que falta alguma informação, por favor nos mande uma mensagem</DescriptText>
                    </DescriptContainer> 
            </ProfileScreenView>

            <MenuContainer>
                <BtnVerdeClaro>
                        <BtnText>Mapa de Palco</BtnText>
                        <BtnDescript>Baixar PDF</BtnDescript>
                </BtnVerdeClaro>
                
                <BtnVerdeClaro>
                        <BtnText>Input List</BtnText>
                        <BtnDescript>Baixar PDF</BtnDescript>
                </BtnVerdeClaro>

                <BtnVerdeClaro>
                        <BtnText>Monitor List</BtnText>
                        <BtnDescript>Baixar PDF</BtnDescript>
                </BtnVerdeClaro>

                <BtnVerdeClaro>
                        <BtnText>Informações Importantes</BtnText>
                </BtnVerdeClaro>
            </MenuContainer>

            <FloatingButton style={{ bottom:100 }}/>

            <StatusBar style="auto" />
            
       </Sobreview> 

    )
};