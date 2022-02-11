import React from 'react';
import { 
    Item, 
    MusicIdContainer, 
    MusicName, 
    MusicArtist, 
    SelectContainer, 
    TagContainer,
    tagPrimaria,
    tagSecundaria,
    BtnPedirMusica,
    TextPedirMusica,
        } from '../ListaItem/styles';

export default (props) => {
    return (
        <Item>
            <MusicIdContainer>
                <MusicName>{props.data.musica}</MusicName>
                <MusicArtist>{props.data.artista}</MusicArtist>
            </MusicIdContainer>
            <SelectContainer>
                <TagContainer>
                    <tagPrimaria>{props.data.tagprimaria}</tagPrimaria>
                    <tagSecundaria>{props.data.tagsecundaria}</tagSecundaria>
                </TagContainer>
            </SelectContainer>
            <BtnPedirMusica>
                <TextPedirMusica>
                    Toca Essa!
                </TextPedirMusica>  
            </BtnPedirMusica>
        </Item>

    )
};