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
         DescriptContainer
} from "./styles"

export default function ProdutosScreen() {

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
                    <HeaderText>A MENOR BANDA SHOW DO SUL DO MUNDO!</HeaderText>
                    <ProfilePicImage source={ProfilePicture}></ProfilePicImage>
                    <DescriptContainer>   
                        <HeaderText>DE PUNK A FUNK!</HeaderText>
                        <DescriptText>Tocamos um pouco de tudo pra não deixar</DescriptText>
                        <DescriptText>NINGUÉM PARADO!</DescriptText>
                        <DescriptText>Tá procurando um show diferenciado? </DescriptText>
                        <DescriptText>Vem com a gente e SEJA MUITO BEM VINDO! </DescriptText>
                    </DescriptContainer> 
            </ProfileScreenView>

            <MenuContainer>
                <BtnVerdeClaro>
                        <BtnText>Documentos</BtnText>
                </BtnVerdeClaro>
                
                <BtnVerdeClaro>
                        <BtnText>Press Release</BtnText>
                </BtnVerdeClaro>

                <BtnVerdeClaro>
                        <BtnText>Produtos</BtnText>
                </BtnVerdeClaro>
            </MenuContainer>

            <FloatingButton style={{ bottom:100 }}/>

            <StatusBar style="auto" />
            
       </Sobreview> 

    )
};