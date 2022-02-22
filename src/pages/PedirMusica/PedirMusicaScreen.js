import { React, useState, useEffect, Button } from 'react';
import AppTieBG from '../../images/apptiebackground2.jpg'
import HeaderComponent from '../../components/HeaderComponent';
import FloatingButton from '../../components/FloatingButton/floatingbutton';
import db from '../../config/firebase'
import { collection, getDocs, doc, setDoc, get } from 'firebase/firestore/lite';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
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

const imgbg = AppTieBG

export default function PedirMusicaScreen() {

  const [repdata, setRepData] = useState([]);

  const getMusicData = async () => {
  const musicsCol = collection(db, 'repertorio');
  const querySnapshot = await getDocs(musicsCol);
  querySnapshot.forEach((doc) => {
     console.log(musicsCol);

 

   })
};
const confereLog = () => {console.log(getMusicData)};
  

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

            <BtnPedirMusica>
                <TextPedirMusica>Toca Essa!</TextPedirMusica>
            </BtnPedirMusica>
  
  
    </ItemView>
  );

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

            <BtnPedirMusica onPress={confereLog}>
                <TextPedirMusica>Toca Essa!</TextPedirMusica>
            </BtnPedirMusica>
    <Container>
      <MusicFlatList
        data={repdata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>

<FloatingButton style={{ bottom:100 }}/>

</MusicList>

  );
}
