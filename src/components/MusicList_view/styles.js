import styled from 'styled-components/native'

export const MusicList = styled.View`
flex:1;
align-items:center;
background-color:#fff;
`

export const HeaderContainer = styled.View`
flex-direction:row;
align-items:center;
width:100%;
height:80px;

background-color:#154a02;
`;

export const ProfilePic = styled.Image`
flex:1;
borderWidth: 2px;
borderColor: #9dbb39;
borderRadius:60px;
max-height:50px;
max-width:50px;
margin:15px;
`;

export const Username = styled.Text`
flex:2;
fontSize:16px;
color:#FFF;
`;



export const ContadorPedidos = styled.Text`
flex:1;
margin-left:12px;
fontSize:16px;
color:#FFF;
`;

export const SearchBar = styled.TextInput`
borderRadius:10px;
backgroundColor:#EEE;
height:40px;
margin:10px;
width:90%;
paddingLeft:10px;


`;
export const SearchBoxIcon = styled.Image`

`;

export const SearchBoxText = styled.Text`

`;

export const MusicRow = styled.View`
flex-direction:column;
justify-content:flex-start;
`;

export const MusicName = styled.Text`
font-weight:bold;
font-size:16px;
color:#000;
`;

export const MusicArtist = styled.Text`
font-style:italic;
font-size:16px;
color:#888;

`;

export const MusicTag = styled.Text`

`;

export const PedirMusica = styled.TouchableOpacity`

`;

export const PedirMusicaIcon = styled.Image`

`;

export const PedirMusicaText= styled.Text`

`;

export const SugerirMusica = styled.TouchableOpacity`

`;

export const SugerirMusicaIcon = styled.Image`

`;

export const SugerirMusicaText= styled.Text`

`;

export const FooterMenu= styled.Text`
flex-direction:row;
align-items:center;
width:100%;
height:80px;
background-color:#154a02;
`;