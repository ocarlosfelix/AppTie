import { TouchableOpacity } from "react-native-gesture-handler";
import { Modal } from "react-native-modal";
import styled from "styled-components/native";

export const Sobreview = styled.ImageBackground`
flex:1;
justify-content:flex-start
align-items:center;
padding-top:30px;
resize-mode:cover;
width:100%;
`;

export const MusicList = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding-top: 30px;
  resize-mode: cover;
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
`;

export const MusicFlatList = styled.FlatList``;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.TextInput`
  border-radius: 10px;
  align-self: center;
  background-color: #eee;
  height: 40px;
  margin: 10px;
  width: 80%;
  padding-left: 10px;
`;
export const SearchBoxIcon = styled.View`
  width: 20px;
  height: 20px;
  padding: 10px;
`;

export const SearchBoxText = styled.Text``;

export const ItemText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const ItemView = styled.View`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ItemContainer = styled.View`
  width: 100%;
`;

export const MusicIdContainer = styled.View`
  padding-left: 15px;
`;

export const MusicNameContainer = styled.View``;

export const MusicTagContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
  font-style: italic;
  font-size: 16px;
  color: #888;
`;

export const MusicName = styled.Text`
  flex: 3;
  font-weight: bold;
  font-size: 20px;
  color: #222;
`;

export const MusicArtist = styled.Text`
  font-style: italic;
  font-size: 16px;
  color: #222;
`;

export const SelectContainer = styled.View`
  flex: 1;
  padding-right: 15px;
`;

export const TagPrimaria = styled.Text`
  background-color: #aa9052;
  border-radius: 5px;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 5px;
  font-style: italic;
  font-size: 10px;
  color: #ccc;
`;

export const TagSecundaria = styled.Text`
  background-color: #aa8688;
  border-radius: 5px;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  font-style: italic;
  font-size: 10px;
  color: #ccc;
`;

export const BtnPedirMusica = styled.TouchableOpacity`
flex:1;
border-radius:10px;        
max-width:85px;
height:50px;
background-color:#154a02;
margin-left:5px;
margin-right:15px
align-items:center;
justify-content:center;
`;

export const BtnOrdenar = styled.TouchableOpacity`
  flex: 1;
  border-radius: 10px;
  width: 310px;
  max-height: 30px;
  background-color: #154a02;
  margin: 5px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

export const TextPedirMusica = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const SearchMenu = styled.View`
  flex-direction: row;
`;

export const OrderButton = styled.TouchableOpacity`
  margin-left: 15px;
  max-height: 30px;
`;

export const OrderModal = styled.Modal`
  flex-direction: row;
`;

export const ModalView = styled.View`
  background-color: white;
  height: 200px;
  width: 80%;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 375px;
  padding: 10px;
`;
export const ModalText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #000;
`;

export const ModalBtnContainer = styled.View`
  flex-direction: row;
  margin: 5px;
`;
