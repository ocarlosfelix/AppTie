import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';

import { Redesview, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer
} from "./styles"

function RedesScreen() {
    return (
        <Redesview>

        <HeaderComponent/>

        <ContadorContainer>
            <ShowsContainer>
                <TextContador>Redes</TextContador>
            </ShowsContainer>
                
            <PedidosContainer>
             <TextContador>Músicas pedidas: 184</TextContador>
            </PedidosContainer>
        </ContadorContainer>
        

   </Redesview> 
    )
};

export default RedesScreen;