import { React, ImageBackground, useState, useEffect } from "react"
import AppTieBG from '../../images/apptiebackground2.jpg'
import HeaderComponent from '../../components/HeaderComponent/index'
import { db, database, appfirebase } from '../../config/firebase'
import { setDoc, addDoc, doc, Firestore, collection, getFirestore } from "firebase/firestore/lite"
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
import { FirebaseError } from "firebase/app"



const imgbg = AppTieBG

export default function AdicionarRepertorioScreen() {

    const [musicName, setMusicName] = useState ('');
    const [musicArtist, setMusicArtist] = useState ('');
    const [musicTagPrimaria, setMusicTagPrimaria] = useState ('');
    const [musicTagSecundaria, setMusicTagSecundaria] = useState ('');

    const PostData = async () => {

        const repReference = await addDoc(collection(db, "repertorio"), {
            musicanome: musicName,
            musicaartista: musicArtist,
            tagprimaria: musicTagPrimaria,
            tagsecundaria: musicTagSecundaria});

        console.log("ID da Musica: ", repReference.id);
        console.log("musicanome: " + musicName);
        console.log("musicaartista: " + musicArtist);
        console.log("tagprimaria: " + musicTagPrimaria);
        console.log("tagsecundaria: " + musicTagSecundaria);         
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


            <BtnIncluirMusica onPress={PostData}>
                <TextoBtn>Adicionar</TextoBtn>
            </BtnIncluirMusica>
        </AreaAdicionarMusica>
            

        </AdicionarRepertorio>

    )
}