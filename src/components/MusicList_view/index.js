import React from "react"
import ProfilePicture from '../../images/logoaptmaca.png'

import { MusicList, HeaderContainer, ProfilePic, Username, TextContadorPedidos, ContadorPedidos,
    SearchBar, SearchBoxIcon, SearchBoxText, MusicRow, 
    MusicName, MusicArtist, MusicTag, PedirMusica, PedirMusicaIcon, 
    PedirMusicaText, SugerirMusica, SugerirMusicaIcon, 
    SugerirMusicaText, FooterMenu } from '../MusicList_view/styles'


export default function MusicList_view() {
    return (       
       <MusicList>
           <HeaderContainer>
            <ProfilePic source={ProfilePicture} />
           <Username>Fulano de Tal</Username>
           <ContadorPedidos>Você já pediu: 100 músicas</ContadorPedidos>
           </HeaderContainer>

        <SearchBar  placeholder="Buscar por nome da música, artista ou gênero">

        </SearchBar>

        <MusicRow>
            <MusicName>Medo da Chuva</MusicName>
            <MusicArtist>Falamansa</MusicArtist>
        </MusicRow>

        <MusicRow>
            <MusicName>Medo da Chuva</MusicName>
            <MusicArtist>Falamansa</MusicArtist>
        </MusicRow>

        <MusicRow>
            <MusicName>Medo da Chuva</MusicName>
            <MusicArtist>Falamansa</MusicArtist>
        </MusicRow>

        <MusicRow>
            <MusicName>Medo da Chuva</MusicName>
            <MusicArtist>Falamansa</MusicArtist>
        </MusicRow>

        <MusicRow>
            <MusicName>Medo da Chuva</MusicName>
            <MusicArtist>Falamansa</MusicArtist>
        </MusicRow>



        <FooterMenu/>
       </MusicList> 

    )
};