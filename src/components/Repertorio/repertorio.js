import { React, useState, useEffect } from "react";
import AppTieBG from "../../images/apptiebackground2.jpg";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export function Repertorio(repertorio) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const repertorioSnapshot = await getDocs(
      collection(db, "repertorio")
    ).then();
    let repertorio = [];
    repertorioSnapshot.forEach((doc) => {
      //console.log(doc.id, ' => ', doc.data())
      const musicas = {
        id: doc.id,
        musicanome: doc.data().musicanome,
        musicaartista: doc.data().musicaartista,
        tagprimaria: doc.data().tagprimaria,
        tagsecundaria: doc.data().tagsecundaria,
      };
      repertorio.push(musicas);
      //console.log(d);
      setData(repertorio);
    });

    console.log("---------function-------------");
  };

  useEffect(() => {
    getData();
  }, []);
}
