import { React, useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { BtnEntrar } from "../../components/FormLogin/styles";
import HeaderComponent from "../../components/HeaderComponent/index";
import AppTieBG from "../../images/apptiebackground2.jpg";
import FloatingButton from "../../components/FloatingButton/floatingbutton";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  documentId,
  QuerySnapshot,
} from "firebase/firestore/lite";
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
  SearchBar,
  SearchContainer,
  SearchBoxIcon,
  SearchMenu,
  OrderButton,
} from "./styles";

export default function TestpageScreen() {
  const imgbg = AppTieBG;

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(data);

  //componente que recebe a lista do repertorio
  const getData = async () => {
    console.log("---------Recebendo Lista de Repertório-------------");
    console.log(".");
    console.log(".");
    console.log(".");

    const repertorioSnapshot = await getDocs(
      collection(db, "repertorio")
    ).then();
    const d = [];
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
      setData(d);
    });

    console.log(data);
    console.log("---------Lista Recebida com Sucesso!-----------");
  };

  //função para receber a lista uma única vez
  useEffect(() => {
    getData();
  }, []);

  //componente de orgazinação da lista
  const handleOrderClick = () => {
    let listaOrganizada = [...data];

    listaOrganizada.sort((a, b) => {
      if (a.musicanome > b.musicanome) {
        return 1;
      } else {
        if (b.musicanome > a.musicanome) {
          return -1;
        } else {
          return 0;
        }
      }
    });

    setList(listaOrganizada);
  };

  //filtro de pesquisa
  useEffect(() => {
    if (searchText === "") {
      setList(data);
    } else {
      setList(
        data.filter((musicas) => {
          if (
            musicas.musicanome
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .indexOf(
                searchText
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) > -1
          ) {
            return true;
          }
          if (
            musicas.musicaartista
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .indexOf(
                searchText
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) > -1
          ) {
            return true;
          }
          if (
            musicas.tagprimaria
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .indexOf(
                searchText
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) > -1
          ) {
            return true;
          }
          if (
            musicas.tagsecundaria
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .indexOf(
                searchText
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              ) > -1
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchText]);

  //Item para renderização da flatlist
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

  //metodo de renderização da flatlist
  const renderItem = ({ item }) => (
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
      <HeaderComponent />

      <SearchContainer>
        <SearchBar
          placeholder="Busque por nome da música, artista ou estilo "
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        ></SearchBar>

        <SearchMenu>
          <OrderButton onPress={handleOrderClick}>
            <Entypo name="sound-mix" size={20} color="#154a02" />
          </OrderButton>
        </SearchMenu>
      </SearchContainer>

      <Container>
        <MusicFlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Container>

      <FloatingButton style={{ bottom: 100 }} />
    </MusicList>
  );
}
