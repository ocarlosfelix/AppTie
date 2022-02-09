import React from "react"
import lista from "../../components/ListaMus/lista"
import SearchIcon from "../../images/searchicon.png"
import FloatingButton from "../../components/FloatingButton/floatingbutton"
import HeaderComponent from "../../components/HeaderComponent/index"

import { MusicList, SearchContainer, SearchBar, SearchBoxIcon, Scroll, MusicRow, Item, 
    MusicIdContainer, MusicName, MusicArtist, TagContainer, PrimeiraTag, SegundaTag, 
    BtnPedirMusica, TextPedirMusica } from './styles'


export default function PedirMusicaScreen() {
    return (       
        <MusicList>

            <HeaderComponent/>

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