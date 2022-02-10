import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import FormContratar from '../../components/FormContratar';
import { StatusBar } from 'expo-status-bar';
import AppTieBG from '../../images/apptiebackground2.jpg'

import { Contratarview, BannerContratar, BannerText
} from "./styles"

function ContratarScreen() {

    const imgbg = AppTieBG

    return (
        <Contratarview source={imgbg}>
            <HeaderComponent/>
            <BannerContratar>
                <BannerText>Preeencha o formulário abaixo e peça já seu orçamento!</BannerText>
            </BannerContratar>
            <FormContratar/>

            <StatusBar style="auto" />
        </Contratarview> 
    )
};

export default ContratarScreen;