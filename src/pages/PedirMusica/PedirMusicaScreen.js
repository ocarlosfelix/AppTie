import React from 'react';
import AppTieBG from '../../images/apptiebackground2.jpg'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {
    MusicList,
    Container,

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

const Item = ({ musicanome, musicaartista, tagprimaria, tagsecundaria }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{musicanome}</Text>
    <Text style={styles.title}>{musicaartista}</Text>
    <Text style={styles.title}>{tagprimaria}</Text>
    <Text style={styles.title}>{tagsecundaria}</Text>
  </View>
);





export default function PedirMusicaScreen() {

const imgbg = AppTieBG

  const renderItem = ({item}, {itemTag}) => (

    <View>
        <Item 
        musicanome={item.musicanome} 
        musicaartista={item.musicaartista}
        />
        <Item 
        tagprimaria={item.tagprimaria}
        tagsecundaria={item.tagsecundaria}
        />
    </View>
  );

  return (

<MusicList source={imgbg}>
    <Container>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
</MusicList>

  );
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#ff88ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemTag: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
  },
  title: {
    fontSize: 32,
  },
});
