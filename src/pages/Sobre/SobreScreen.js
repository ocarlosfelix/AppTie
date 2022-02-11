import { React, useState, useEffect } from 'react';
import { View } from 'react-native';
import { BtnEntrar } from '../../components/FormLogin/styles';
import HeaderComponent from '../../components/HeaderComponent/index'
import AppTieBG from '../../images/apptiebackground2.jpg'
import { db } from '../../config/firebase';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';


import { 
    Sobreview,
} from "./styles"

export default function SobreScreen() {

    const imgbg = AppTieBG

    const GetData = async () =>{
        const musicsCol = collection(db, 'repertorio');
        const musicSnapshot = await getDocs(musicsCol);
        const musicList = musicSnapshot.docs.map(doc => doc.data());

        console.log(musicList);
    }

    return (
        <Sobreview source={imgbg}>

        <HeaderComponent/>
        
        <View>
            <BtnEntrar title="getData" onPress={GetData}/>

        </View>

        </Sobreview> 
    )
};
