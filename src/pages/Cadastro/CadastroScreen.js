import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';

import { Cadastroview, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer
} from "./styles"

function CadastroScreen() {
    return (
        <Cadastroview>

        <HeaderComponent/>

        <ContadorContainer>
            <ShowsContainer>
                <TextContador>AREA DE CADASTRO</TextContador>
            </ShowsContainer>
                
            <PedidosContainer>
             <TextContador>Músicas pedidas: 184</TextContador>
            </PedidosContainer>
        </ContadorContainer>
        

   </Cadastroview> 
    )
};

export default CadastroScreen;