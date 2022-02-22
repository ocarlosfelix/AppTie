
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
import { db } from '../../config/firebase';
import { collection, getDocs, doc, setDoc, documentId, QuerySnapshot } from 'firebase/firestore/lite';
import { 
    Sobreview,
} from "./styles"

export default function TestpageScreen() {

    const imgbg = AppTieBG

    const GetData = async () =>{
        const musicsCol = collection(db, 'repertorio');
        const musicSnapshot = await getDocs(musicsCol);
        const musicList = musicSnapshot.docs.map(doc => doc.data());
        const musicIDList = musicSnapshot.docs.map(doc => doc.id);
        const musicID = musicSnapshot.docs.map(doc => doc.id);
        const music = musicList.map(
        doc => musicID
        + ' || ' + 
        doc.musicaartista 
        + ' - ' + 
        doc.musicanome
         + ' -> ' + 
        doc.tagprimaria 
        + ' | ' + 
        doc.tagsecundaria);

        console.log(music);
        console.log(musicList);
        console.log("----------------------");
    };

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
        <Sobreview source={imgbg}>

        <HeaderComponent/>
        
        <View>
            <BtnEntrar title="getData" onPress={GetData}/>

        </View>

        </Sobreview> 
    )
};
