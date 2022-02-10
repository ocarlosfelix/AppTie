import { React, useState, useEffect } from 'react';
import { View } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/index'
import styled from "../../pages/Sobre/styles"
import AppTieBG from '../../images/apptiebackground2.jpg'


import { Sobreview, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer
} from "./styles"

export default function SobreScreen() {

    const imgbg = AppTieBG
   
    return (
        <Sobreview source={imgbg}>

        <HeaderComponent/>
        
        <View>

        </View>

        </Sobreview> 
    )
};
