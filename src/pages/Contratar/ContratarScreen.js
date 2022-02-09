import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';

import { Contratarview, ContadorContainer, ShowsContainer,
        TextContador, PedidosContainer
} from "./styles"

function ContratarScreen() {
    return (
        <Contratarview>

        <HeaderComponent/>

        <ContadorContainer>
            <ShowsContainer>
                <TextContador>CONTRATAR</TextContador>
            </ShowsContainer>
                
            <PedidosContainer>
             <TextContador>Músicas pedidas: 184</TextContador>
            </PedidosContainer>
        </ContadorContainer>
        

   </Contratarview> 
    )
};

export default ContratarScreen;