import React from "react"
import ProfilePicture from '../../images/logoaptmaca.png'
import lista from "./lista"
import SearchIcon from "../../images/searchicon.png"
import FloatingButton from "./floatingbutton"

import { MusicList, Header, ProfileBox, ProfilePic, Username, ContadorBox, PedidosText, PedidosNum,
    SearchContainer, SearchBar, SearchBoxIcon, SearchBoxText, Scroll, MusicRow, Item, 
    ItemText, MusicIdContainer, MusicName, MusicArtist, TagContainer, PrimeiraTag, SegundaTag, 
    BtnPedirMusica, TextPedirMusica , SugerirMusica, BtnSugerirMusica, 
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
        <SearchContainer>
            <SearchBar  placeholder="Buscar por nome da música, artista ou gênero"/>
                <SearchBoxIcon source={SearchIcon} />
        
        </SearchContainer>

        <Scroll>
        <MusicRow>
            {lista.map((item, index)=>{
                return(
                    <Item key={index}>
                        <MusicIdContainer>
                            <MusicName>{item.musica}</MusicName>
                            <MusicArtist>{item.artista}</MusicArtist>
                        </MusicIdContainer>
                        <TagContainer>
                            <PrimeiraTag>{item.tag1}</PrimeiraTag>
                            <SegundaTag>{item.tag2}</SegundaTag>
                        </TagContainer>
                        
                        <BtnPedirMusica>
                            <TextPedirMusica>
                                Toca Essa!
                            </TextPedirMusica>
                        </BtnPedirMusica>
                    </Item>
                )
            })}
        </MusicRow>
        </Scroll>

            <FloatingButton style={{ bottom:100 }}/>

       </MusicList> 

    )
};