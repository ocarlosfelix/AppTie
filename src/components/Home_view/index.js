import React from "react"
import ProfilePicture from '../../images/logoaptmaca.png'
import FloatingButton from "./floatingbutton"
import { useNavigation } from '@react-navigation/native'

import { Homeview, Header, ProfileBox, ProfilePic, Username,
    BtnVerdeClaro, BtnVerdeEscuro, BtnText, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer
} from "./styles"

export default function Home_view() {

    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('PedirMusica');
    }

    return (       
        <Homeview>

            <Header>
                <ProfileBox>
                    <ProfilePic source={ProfilePicture} />
                    <Username>Fulano de Tal</Username>
                </ProfileBox>

            </Header>

            <ContadorContainer>
                <ShowsContainer>
                    <TextContador>Shows assistidos: 47</TextContador>
                </ShowsContainer>
                    
                <PedidosContainer>
                 <TextContador>Músicas pedidas: 184</TextContador>
                </PedidosContainer>
            </ContadorContainer>
            
            <BtnVerdeClaro
                    onPress={ handleSobreClick }>
                    <BtnText>Pedir Musica</BtnText>
            </BtnVerdeClaro>
            
            <BtnVerdeClaro
                    >
                    <BtnText>Sobre a Banda</BtnText>
            </BtnVerdeClaro>
            
            <BtnVerdeClaro
                    >
                    <BtnText>Redes Sociais</BtnText>
            </BtnVerdeClaro>

            <BtnVerdeClaro
                    >
                    <BtnText>Contratar</BtnText>
            </BtnVerdeClaro>

            <BtnVerdeEscuro
                   >
                    <BtnText>Área da Banda</BtnText>
            </BtnVerdeEscuro>

        

            <FloatingButton style={{ bottom:100 }}/>

       </Homeview> 

    )
};