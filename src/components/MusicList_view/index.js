import React from "react"
import ProfilePicture from '../../images/logoaptmaca.png'
import lista from "../../lista"
import { pedirmusicon } from "../../images/pedirmusicon.png"

import { MusicList, Header, ProfileBox, ProfilePic, Username, ContadorBox, PedidosText, PedidosNum,
    SearchBar, SearchBoxIcon, SearchBoxText, Scroll, MusicRow, Item, 
    ItemText, MusicName, MusicArtist, MusicTag, PedirMusica, PedirMusicaIcon, 
    PedirMusicaText, SugerirMusica, SugerirMusicaIcon, 
    SugerirMusicaText, FooterMenu } from '../MusicList_view/styles'


export default function MusicList_view() {
    return (       
        <MusicList>
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

        <SearchBar  placeholder="Buscar por nome da música, artista ou gênero">

        </SearchBar>

        <PedirMusica source={pedirmusicon} />
        <PedirMusica source={pedirmusicon} />

        <Scroll>
        <MusicRow>
            {lista.map((item, index)=>{
                return(
                    <Item key={index}>
                        <MusicName>{item.musica}</MusicName>
                        <MusicArtist>{item.artista}</MusicArtist>
                        <MusicTag>{item.tag1}</MusicTag>
                    </Item>
                )
            })}
        </MusicRow>
        </Scroll>

        <FooterMenu>
            <PedirMusica source={pedirmusicon} />
            <PedirMusica source={pedirmusicon} />
        </FooterMenu>


       </MusicList> 

    )
};