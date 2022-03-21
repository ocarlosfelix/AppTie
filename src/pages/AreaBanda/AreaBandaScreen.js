import { React, useState, useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent/index";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import AppTieBG from "../../images/apptiebackground2.jpg";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
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
  AreaBandaview,
  Texto,
  MenuAreaBanda,
  TouchableAreaBanda,
  PedidosView,
  ShowAtivo,
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
} from "./styles";

export default function AreaBandaScreen() {
  const imgbg = AppTieBG;
  const navigation = useNavigation();

  const handleAddRepClick = () => {
    navigation.navigate("AdicionarRepertorio");
  };

  const handleAddShowClick = () => {
    navigation.navigate("AdicionarShow");
  };

  const handleMetricasClick = () => {
    navigation.navigate("AdicionarShow");
  };

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(data);

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

  const modalListOrder = () => {
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
        <TextPedirMusica>Atendido!</TextPedirMusica>
      </BtnPedirMusica>
    </ItemView>
  );

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
    <AreaBandaview source={imgbg}>
      <HeaderComponent />

      <MenuAreaBanda>
        <TouchableAreaBanda onPress={handleAddRepClick}>
          <Entypo name='add-to-list' size={45} color='#4b3621' />
          <Text>Música</Text>
        </TouchableAreaBanda>

        <TouchableAreaBanda onPress={handleAddShowClick}>
          <Entypo name='plus' size={45} color='#4b3621' />
          <Text>Novo Show</Text>
        </TouchableAreaBanda>

        <TouchableAreaBanda onPress={handleMetricasClick}>
          <Entypo name='bar-graph' size={45} color='#4b3621' />
          <Text>Métricas</Text>
        </TouchableAreaBanda>
      </MenuAreaBanda>

      <PedidosView>
        <ShowAtivo>
          <Texto>Show: Show ativo</Texto>
          <Texto>21/03/2021</Texto>
        </ShowAtivo>

        <Container>
          <MusicFlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </Container>
      </PedidosView>

      <StatusBar style='auto' />
    </AreaBandaview>
  );
}
