import { React, ImageBackground, useState, useEffect } from "react";
import AppTieBG from "../../images/apptiebackground2.jpg";
import HeaderComponent from "../../components/HeaderComponent/index";
import { db, database, appfirebase } from "../../config/firebase";
import {
  setDoc,
  addDoc,
  doc,
  Firestore,
  collection,
  getFirestore,
} from "firebase/firestore/lite";
import { StatusBar } from "expo-status-bar";
import "firebase/firestore";

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
  TextoBtn,
} from "./styles";
import { FirebaseError } from "firebase/app";

const imgbg = AppTieBG;

export default function AdicionarShowScreen() {
  const [showLocal, setShowLocal] = useState("");
  const [showData, setShowData] = useState("");
  const [musicTagPrimaria, setMusicTagPrimaria] = useState("");
  const [musicTagSecundaria, setMusicTagSecundaria] = useState("");

  const PostData = async () => {
    const repReference = await addDoc(collection(db, "shows"), {
      showlocal: showLocal,
      showdata: showData,
      tagprimaria: musicTagPrimaria,
      tagsecundaria: musicTagSecundaria,
    });

    console.log("ID da Musica: ", repReference.id);
    console.log("showlocal: " + showLocal);
    console.log("showdata: " + showData);
    console.log("tagprimaria: " + musicTagPrimaria);
    console.log("tagsecundaria: " + musicTagSecundaria);
  };

  return (
    <AdicionarRepertorio source={imgbg}>
      <HeaderComponent />

      <PageTitle>Novo Show</PageTitle>

      <AreaAdicionarMusica>
        <InputView>
          <InputTitle>Local:</InputTitle>
          <InputTitle> {showLocal}</InputTitle>
        </InputView>
        <InputMusicName
          placeholder='Digite o nome do local do show'
          onChangeText={(text) => setShowLocal(text)}
          value={showLocal}
        />

        <InputView>
          <InputTitle>Data:</InputTitle>
          <InputTitle> {showData}</InputTitle>
        </InputView>
        <InputArtistName
          placeholder='Digite a data do show'
          onChangeText={(text) => setShowData(text)}
          value={showData}
        />

        <InputView>
          <InputTitle>Tag Primária:</InputTitle>
          <InputTitle> {musicTagPrimaria}</InputTitle>
        </InputView>
        <InputTagPrimariaName
          placeholder='Qual é o estilo predominante?'
          onChangeText={(text) => setMusicTagPrimaria(text)}
          value={musicTagPrimaria}
        />

        <InputView>
          <InputTitle>Tag Secundária:</InputTitle>
          <InputTitle> {musicTagSecundaria}</InputTitle>
        </InputView>
        <InputTagSecundariaName
          placeholder='Qual é o estilo secundário?'
          onChangeText={(text) => setMusicTagSecundaria(text)}
          value={musicTagSecundaria}
        />

        <BtnIncluirMusica onPress={PostData}>
          <TextoBtn>Adicionar</TextoBtn>
        </BtnIncluirMusica>
      </AreaAdicionarMusica>
    </AdicionarRepertorio>
  );
}
