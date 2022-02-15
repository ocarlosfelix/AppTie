import { React, ImageBackground, useState, useEffect } from "react"
import AppTieBG from '../../images/apptiebackground2.jpg'
import HeaderComponent from '../../components/HeaderComponent/index'
import { db, database, appfirebase } from '../../config/firebase'
import { setDoc, addDoc, doc, Firestore, collection, getFirestore } from "firebase/firestore"
import { StatusBar } from 'expo-status-bar'
import "firebase/firestore"

import { 
    AdicionarRepertorio, 
    AreaAdicionarMusica, 
    BtnIncluirMusica, 
    InputArtistName, 
    InputMusicName, 
    InputTagPrimariaName, 
    InputTagSecundariaName, 
    InputTitle, 
    InputView, 
    PageTitle,
    TextoBtn} from "./styles";


const imgbg = AppTieBG

export default function AdicionarRepertorioScreen() {

    const [musicName, setMusicName] = useState ('');
    const [musicArtist, setMusicArtist] = useState ('');
    const [musicTagPrimaria, setMusicTagPrimaria] = useState ('');
    const [musicTagSecundaria, setMusicTagSecundaria] = useState ('');

    const pushFirestore = async () => {
        await 
            appfirebase
            .collection("repertorio")
            .add({
                musicanome:musicName,
                musicaartista:musicArtist,
                tagprimaria:musicTagPrimaria,
                tagsecundaria:musicTagSecundaria,
          }).then(()=>{
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((err)=>{
            console.log(err);
        })

        

    };

    return (
        <AdicionarRepertorio source={imgbg}>
            <HeaderComponent/>

            <PageTitle>Adicionar Músicas ao Repertório</PageTitle>


        <AreaAdicionarMusica>

        <InputView>
        <InputTitle>Nome da Música:</InputTitle>
        <InputTitle> {musicName}</InputTitle>
        </InputView>
            <InputMusicName 
                placeholder="Digite o nome completo da música"
                onChangeText={text=>setMusicName(text)} 
                value={musicName}/>

        <InputView>
            <InputTitle>Nome do Artista:</InputTitle>
            <InputTitle> {musicArtist}</InputTitle>
        </InputView>
            <InputArtistName 
                placeholder="Digite o nome do artista" 
                onChangeText={text=>setMusicArtist(text)} 
                value={musicArtist}/>

        <InputView>
            <InputTitle>Tag Primária:</InputTitle>
            <InputTitle> {musicTagPrimaria}</InputTitle>
        </InputView>        
            <InputTagPrimariaName 
                placeholder="Qual é o estilo predominante?" 
                onChangeText={text=>setMusicTagPrimaria(text)} 
                value={musicTagPrimaria}/>

        <InputView>
            <InputTitle>Tag Secundária:</InputTitle>
            <InputTitle> {musicTagSecundaria}</InputTitle>
        </InputView>
            <InputTagSecundariaName 
                placeholder="Qual é o estilo secundário?" 
                onChangeText={text=>setMusicTagSecundaria(text)} 
                value={musicTagSecundaria}/>


            <BtnIncluirMusica onPress={pushFirestore}>
                <TextoBtn>Adicionar</TextoBtn>
            </BtnIncluirMusica>
        </AreaAdicionarMusica>
            

        </AdicionarRepertorio>

    )
}