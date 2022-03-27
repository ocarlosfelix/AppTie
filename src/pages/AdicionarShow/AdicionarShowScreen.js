import { React, ImageBackground, useState, useEffect } from "react";
import AppTieBG from "../../images/apptiebackground2.jpg";
import HeaderComponent from "../../components/HeaderComponent/index";
import {
  db,
  database,
  appfirebase,
  serverTimestamp,
} from "../../config/firebase";
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
import { Timestamp } from "firebase/firestore";

const imgbg = AppTieBG;

export default function AdicionarShowScreen() {
  const [showLocal, setShowLocal] = useState("");
  const [showData, setShowData] = useState("");
  const [showHoraInicio, setShowHoraInicio] = useState("");
  const [showHoraFim, setShowHoraFim] = useState("");
  const [showPedidos, setShowPedidos] = useState([]);
  const [showAtivo, setShowAtivo] = useState(false);
  const datashow = Timestamp.fromDate(new Date(showData));

  const PostData = async () => {
    const repReference = await addDoc(collection(db, "shows"), {
      showlocal: showLocal,
      showdata: datashow,
      showhorainicio: showHoraInicio,
      showhorafim: showHoraFim,
      showpedidos: showPedidos,
      showativo: showAtivo,
    });

    console.log("ID do show: ", repReference.id);
    console.log("showlocal: " + showLocal);
    console.log("showdata: " + showData);
    console.log("showhorainicio: " + showHoraInicio);
    console.log("showhorafim: " + showHoraFim);
    console.log("showpedidos: " + showPedidos);
    console.log("showativo: " + showAtivo);
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
          onChangeText={(text) => setShowData(VarDate)}
          value={showData}
        />

        <InputView>
          <InputTitle>Hora de Início:</InputTitle>
          <InputTitle> {showHoraInicio}</InputTitle>
        </InputView>
        <InputTagPrimariaName
          placeholder='Qual é o horário de início?'
          onChangeText={(text) => setShowHoraInicio(text)}
          value={showHoraInicio}
        />

        <BtnIncluirMusica onPress={PostData}>
          <TextoBtn>Adicionar</TextoBtn>
        </BtnIncluirMusica>
      </AreaAdicionarMusica>
    </AdicionarRepertorio>
  );
}
