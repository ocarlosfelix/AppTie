import { React, useState, useEffect } from 'react';
import AppTieBG from '../../images/apptiebackground2.jpg'
import HeaderComponent from '../../components/HeaderComponent';
import FloatingButton from '../../components/FloatingButton/floatingbutton';
import db from '../../config/firebase'
import { collection, getDocs, doc, setDoc, get } from 'firebase/firestore/lite';
import {
    MusicList,
    Container,
    MusicFlatList,
    ItemView,
    ItemContainer,
    MusicIdContainer,
    MusicName,
    MusicArtist,
    TagPrimaria,
    TagSecundaria,
    BtnPedirMusica,
    TextPedirMusica,
    MusicTagContainer,
    SelectContainer,

} from '../PedirMusica/styles'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    musicanome: 'Musa do Verão',
    musicaartista: 'Felipe Dylon',
    tagprimaria:'pop',
    tagsecundaria:'ruim',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    musicanome: 'Prometida',
    musicaartista: 'Broz',
    tagprimaria:'pop',
    tagsecundaria:'ruim',
    
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    musicanome: 'Ritmo Ragatanga',
    musicaartista: 'Rouge',
    tagprimaria:'pop',
    tagsecundaria:'ruim',
  },
  {
    id: '76349e9e-6jz9-49y2-af73-495876r12a12',
    musicanome: 'Boladão de Amor',
    musicaartista: 'Hermes E Renato',
    tagprimaria:'pop',
    tagsecundaria:'ruim',
  },
];

export default function PedirMusicaScreen() {

  const [musicName, setMusicName] = useState ('');
  const [musicArtist, setMusicArtist] = useState ('');
  const [musicTagPrimaria, setMusicTagPrimaria] = useState ('');
  const [musicTagSecundaria, setMusicTagSecundaria] = useState ('');

  const getMusicData = async () => {
    const docMusica = {
      musicanome: musicName,
      musicaartista: musicArtist,
      tagprimaria: musicTagPrimaria,
      tagsecundaria: musicTagSecundaria
};
const repReference = await get(collection(db, "repertorio"), {docMusica});

console.log(docMusica);
console.log("ID da Musica: ", repReference.id);
  };


  const Item = ({ musicanome, musicaartista, tagprimaria, tagsecundaria }) => (
    <ItemView>
            <MusicIdContainer>
                <MusicName>{musicanome}</MusicName>
                <MusicArtist>{musicaartista}</MusicArtist>
            </MusicIdContainer>
  
            <SelectContainer>
                <MusicTagContainer>
                    <TagPrimaria>{tagprimaria}</TagPrimaria>
                    <TagSecundaria>{tagsecundaria}</TagSecundaria>
                </MusicTagContainer>
            </SelectContainer>

            <BtnPedirMusica onPress={getMusicData}>
                <TextPedirMusica>Toca Essa!</TextPedirMusica>
            </BtnPedirMusica>
  
  
    </ItemView>
  );

const imgbg = AppTieBG

  const renderItem = ({item}) => (

    <ItemContainer>
        <Item 
        musicanome={item.musicanome} 
        musicaartista={item.musicaartista}
        tagprimaria={item.tagprimaria}
        tagsecundaria={item.tagsecundaria}
        />      
    </ItemContainer>
  );

  return (

<MusicList source={imgbg}>

    <HeaderComponent/>

    <Container>
      <MusicFlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>

<FloatingButton style={{ bottom:100 }}/>

</MusicList>

  );
}
