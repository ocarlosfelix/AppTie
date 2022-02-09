import React from "react"
import ProfilePicture from '../../images/logoaptmaca.png'

import { Header, ProfileBox, ProfilePic, Username, 
    ContadorBox, PedidosText, PedidosNum } from './styles'


export default function PedirMusica_view() {
    return (
            <Header>
                <ProfileBox>
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