
{/*} INFORMAÇÕES IMPORTANTES
Pagina criada para testar a comunicação com o banco de dados e 
descobrir qual será o método utilizado para receber as 
informações de cada um dos documentos da coleção "repertorio".

Depois de receber os dados, estes serão encaminhados para a 
flatlist presente na PedirMusicaScreen para a geração da lista.
Modelo ideal de tratamento desses dados:

Array [
    "D4J4XVKorsFYK92sNs27 || Cássia Eller - Malandragem -> Pop | Rock",
    "HSMboeEGKB6yB21PSr83 || Lenine - Hoje Eu Quero Sair Só -> MPB | Pop",
    "VIiUxY2YnxLMXUHV2NOP || Gugu Liberato - Pintinho Amarelinho -> Infantil | Pop",
    "kKexUfUWArx25VQyvDj5 || Legião Urbana - Pais e Filhos -> Pop | Rock",
  ]

Ao fim dos testes essa página será excluida.
P.S.: Existe uma pasta chamada PedirMusicaScreen - backup, 
com a última tentativa estável da flatlist em caso de caquinha.
{*/} 

import { React, useState, useEffect } from 'react';
import { View } from 'react-native';
import { BtnEntrar } from '../../components/FormLogin/styles';
import HeaderComponent from '../../components/HeaderComponent/index'
import AppTieBG from '../../images/apptiebackground2.jpg'
import FloatingButton from '../../components/FloatingButton/floatingbutton';
import { db } from '../../config/firebase';
import { collection, getDocs, doc, setDoc, documentId, QuerySnapshot } from 'firebase/firestore/lite';
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
} from "./styles"


export default function TestpageScreen() {

    const imgbg = AppTieBG

    const [data, setData] = useState([]);

    const getData = async () =>{
        const repertorioSnapshot = await getDocs(collection(db, 'repertorio')).then();
        let d = [];
        repertorioSnapshot.forEach((doc) => {
            //console.log(doc.id, ' => ', doc.data())
            const musicas = {               
            id: doc.id,
            musicanome: doc.data().musicanome,
            musicaartista: doc.data().musicaartista,
            tagprimaria: doc.data().tagprimaria,
            tagsecundaria: doc.data().tagsecundaria,
        };
        d.push(musicas);
        //console.log(d);
        setData(d);})
        

        
        console.log("---------function-------------");


    };

    useEffect(() => {getData()}, []);

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

//--------------ULTIMA TENTATIVA ESTÁVEL------------------//
{/*}    const GetData = async () =>{
        const musicsCol = collection(db, 'repertorio');
        const musicSnapshot = await getDocs(musicsCol);
        const musicList = musicSnapshot.docs.map(doc => doc.data());
        const musicIDList = musicSnapshot.docs.map(doc => doc.id);
        const musicID = musicIDList.forEach(doc => music);
        const music = musicList.map(
        doc => musicIDList
        + ' || ' + 
        doc.musicaartista 
        + ' - ' + 
        doc.musicanome
         + ' -> ' + 
        doc.tagprimaria 
        + ' | ' + 
        doc.tagsecundaria);

        console.log(music);
        console.log("----------------------");
    }
{*/}

    return (
<MusicList source={imgbg}>

<HeaderComponent/>

<Container>
  <MusicFlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
</Container>

<FloatingButton style={{ bottom:100 }}/>

</MusicList>
    )
};
