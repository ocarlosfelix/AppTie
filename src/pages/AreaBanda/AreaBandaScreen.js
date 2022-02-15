import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import AppTieBG from '../../images/apptiebackground2.jpg'

import { AreaBandaview, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer, BtnVerdeEscuro, BtnText
} from "./styles"


const imgbg = AppTieBG

function AreaBandaScreen() {

    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('AdicionarRepertorio');
    }

    return (
        <AreaBandaview source={imgbg}>

        <HeaderComponent/>

        <ContadorContainer>
            <ShowsContainer>
                <TextContador>AREA DA BANDA</TextContador>
            </ShowsContainer>
                
            <PedidosContainer>
             <TextContador>Músicas pedidas: 184</TextContador>
            </PedidosContainer>
        </ContadorContainer>
        
        <BtnVerdeEscuro onPress={ handleSobreClick }>
            <BtnText>Adicionar Música</BtnText>
        </BtnVerdeEscuro>

        <StatusBar style="auto" />

   </AreaBandaview> 
    )
};

export default AreaBandaScreen;