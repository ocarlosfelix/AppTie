import styled from 'styled-components/native'

export const MusicList = styled.ImageBackground`
flex:1;
align-items:center;
paddingTop:30px;
resize-mode:cover;
width:100%;
`;

export const Container = styled.View`
width:100%;
`;

export const MusicFlatList = styled.FlatList`

`;

export const SearchContainer = styled.View`
flexDirection:row;
justifyContent:center;
alignItems: center;
`;

export const SearchBar = styled.TextInput`
borderRadius:10px;
align-self:center;
backgroundColor:#EEE;
height:40px;
margin:10px;
width:80%;
paddingLeft:10px;

`;
export const SearchBoxIcon = styled.Image`
width:20px;
height:20px;
padding: 10px;
`;

export const SearchBoxText = styled.Text`

`;

export const ItemText = styled.Text`
font-weight:bold;
font-size:16px;
color:#000;
`;

export const ItemView = styled.View`
flex-direction:row;
backgroundColor: rgba(255, 255, 255, 0.7);
margin-top:5px;
margin-bottom:5px;
padding-top:5px;
padding-bottom:5px;
`;

export const ItemContainer = styled.View`
width:100%;
`;

export const MusicIdContainer = styled.View`
padding-left:15px;
`;

export const MusicNameContainer = styled.View`
`;

export const MusicTagContainer = styled.View`
flex:1;
justify-content:flex-end;
align-items:flex-end;
flex-direction:row;
font-style:italic;
font-size:16px;
color:#888;
`;

export const MusicName = styled.Text`
flex:3;
font-weight:bold;
font-size:20px;
color:#222;
`;

export const MusicArtist = styled.Text`
font-style:italic;
font-size:16px;
color:#222;

`;

export const SelectContainer= styled.View`
flex:1;
padding-right:15px
`;

export const TagPrimaria = styled.Text`
background-color:#AA9052;
border-radius:5px;
justify-content:center;
padding-left:5px;
padding-right:5px;
margin-right:5px;
font-style:italic;
font-size:10px;
color:#CCC;
`;

export const TagSecundaria = styled.Text`
background-color:#AA8688;
border-radius:5px;
justify-content:center;
padding-left:5px;
padding-right:5px;
font-style:italic;
font-size:10px;
color:#CCC;
`;

export const BtnPedirMusica = styled.TouchableOpacity`
flex:1;
borderRadius:10px;        
max-width:85px;
height:50px;
backgroundColor:#154a02;
marginLeft:5px;
margin-right:15px
alignItems:center;
justifyContent:center;
`;


export const TextPedirMusica= styled.Text`
fontSize:15px;
color:#FFF;
`;





