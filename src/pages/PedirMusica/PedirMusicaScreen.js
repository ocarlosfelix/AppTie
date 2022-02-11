import { React, useEffect, useState } from "react"
import lista from "../../components/ListaMus/lista"
import SearchIcon from "../../images/searchicon.png"
import FloatingButton from "../../components/FloatingButton/floatingbutton"
import HeaderComponent from "../../components/HeaderComponent/index"
import AppTieBG from '../../images/apptiebackground2.jpg'
import { StatusBar } from 'expo-status-bar';
import ListaItem from "../../components/ListaItem/ListaItem.js"

import { 
    MusicList, 
    SearchContainer, 
    SearchBar, 
    SearchBoxIcon, 
    FlatContainer, 
    Listagem, 
       } from './styles'



export default function PedirMusicaScreen() {

//Conexão com o banco de dados//    
    const [data,setData] = useState([]);

 
//---------------------------//
    const imgbg = AppTieBG

    return (       
        <MusicList source={imgbg}>

            <HeaderComponent/>

        <SearchContainer>
            <SearchBar  placeholder="Buscar por nome da música, artista ou gênero"/>
                <SearchBoxIcon source={SearchIcon} />
        
        </SearchContainer>

        <FlatContainer>
            <Listagem
            data={lista}
            renderItem={({item})=><ListaItem data={item}/>}
            keyExtractor={(item)=>item.id}
            />
        </FlatContainer>




        <StatusBar style="auto" />
            <FloatingButton style={{ bottom:100 }}/>

       </MusicList> 

    )
};