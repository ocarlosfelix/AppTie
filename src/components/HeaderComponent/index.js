import React from "react"
import ProfilePicture from '../../images/logoaptmaca.png'
import { useNavigation } from '@react-navigation/native'

import { Header, ProfileBox, ProfilePic, Username, 
    ContadorBox, PedidosText, PedidosNum } from './styles'


export default function HeaderComponent() {

    const navigation = useNavigation();

    const SobreClickProfile = () => {
        navigation.navigate('Profile');
    }

    return (
            <Header>
                <ProfileBox onPress={ SobreClickProfile }>                   
                    <ProfilePic source={ProfilePicture} />
                    <Username>Fulano de Tal</Username>
                </ProfileBox>

                <ContadorBox>
                    <PedidosText>Você já pediu:</PedidosText>
                    <PedidosNum> 100 músicas</PedidosNum>
                </ContadorBox>
            </Header>
                )
            };