import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';

import { Sobreview, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer
} from "./styles"

function SobreScreen() {
    return (
        <Sobreview>

        <HeaderComponent/>

        <ContadorContainer>
            <ShowsContainer>
                <TextContador>Sobre</TextContador>
            </ShowsContainer>
                
            <PedidosContainer>
             <TextContador>Músicas pedidas: 184</TextContador>
            </PedidosContainer>
        </ContadorContainer>
        

   </Sobreview> 
    )
};

export default SobreScreen;