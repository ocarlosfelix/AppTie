import React from "react"
import HeaderComponent from '../../components/HeaderComponent/index'
import FloatingButton from "../../components/FloatingButton/floatingbutton"
import { useNavigation } from '@react-navigation/native'
import AppTieBG from '../../images/apptiebackground2.jpg'
import { StatusBar } from 'expo-status-bar';

import { Homeview, BtnVerdeClaro, BtnVerdeEscuro, 
    BtnText, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer, MenuContainer
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

    const imgbg = AppTieBG

    return (       
        <Homeview source={imgbg}>

            <HeaderComponent/>

{/*            <ContadorContainer>
                <ShowsContainer>
                    <TextContador>Shows assistidos: 47</TextContador>
                </ShowsContainer>
                    
                <PedidosContainer>
                 <TextContador>Músicas pedidas: 184</TextContador>
                </PedidosContainer>
            </ContadorContainer>
*/}         

<MenuContainer>

            <BtnVerdeClaro onPress={ SobreClickPedirMusica }>
                    <BtnText>Pedir Musica</BtnText>
            </BtnVerdeClaro>
            
            <BtnVerdeClaro onPress={ SobreClickSobre }>
                    <BtnText>Sobre a Banda</BtnText>
            </BtnVerdeClaro>
            
            <BtnVerdeClaro onPress={ SobreClickRedes }>
                    <BtnText>Redes Sociais</BtnText>
            </BtnVerdeClaro>

            <BtnVerdeClaro onPress={ SobreClickContratar }>
                    <BtnText>Contratar</BtnText>
            </BtnVerdeClaro>

            <BtnVerdeEscuro onPress={ SobreClickAreaBanda }>
                    <BtnText>Área da Banda</BtnText>
            </BtnVerdeEscuro>

</MenuContainer>

            <FloatingButton style={{ bottom:100 }}/>
            <StatusBar style="auto" />
       </Homeview> 

    )
};