import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';

import { AreaBandaview, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer
} from "./styles"

function AreaBandaScreen() {
    return (
        <AreaBandaview>

        <HeaderComponent/>

        <ContadorContainer>
            <ShowsContainer>
                <TextContador>AREA DA BANDA</TextContador>
            </ShowsContainer>
                
            <PedidosContainer>
             <TextContador>Músicas pedidas: 184</TextContador>
            </PedidosContainer>
        </ContadorContainer>
        

   </AreaBandaview> 
    )
};

export default AreaBandaScreen;