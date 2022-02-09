import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import FormContratar from '../../components/FormContratar';

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
        </ContadorContainer>

<FormContratar/>
        

   </Contratarview> 
    )
};

export default ContratarScreen;