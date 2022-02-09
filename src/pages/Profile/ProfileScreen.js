import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';

import { Profileview, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer
} from "./styles"

function ProfileScreen() {
    return (
        <Profileview>

        <HeaderComponent/>

        <ContadorContainer>
            <ShowsContainer>
                <TextContador>Profile</TextContador>
            </ShowsContainer>
                
            <PedidosContainer>
             <TextContador>Músicas pedidas: 184</TextContador>
            </PedidosContainer>
        </ContadorContainer>
        

   </Profileview> 
    )
};

export default ProfileScreen;