import styled from 'styled-components/native'

export const MusicList = styled.View`
flex:1;
background-color:#fff;
`

export const Header = styled.View`
flex-direction:row;
justify-content: space-around;
align-items:center;
width:100%;
background-color:#154a02;
`;

export const ProfileBox = styled.View`
flex:1;
flex-direction:row;
align-items:center;
`;

export const ProfilePic = styled.Image`
borderWidth: 2px;
borderColor: #9dbb39;
borderRadius:60px;
max-height:50px;
max-width:50px;
margin:15px;
`;

export const Username = styled.Text`
fontSize:16px;
color:#FFF;
`;

export const ContadorBox = styled.Text`
fontSize:16px;
color:#FFF;
`;

export const PedidosText = styled.Text`
flex:1;
fontSize:16px;
color:#FFF;
`;

export const PedidosNum = styled.Text`
flex:1;
fontSize:16px;
color:#F00;
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

`;

export const Scroll = styled.ScrollView`
    width:100%;
`;

export const Item = styled.View`
padding:10px;
`;

export const ItemText = styled.Text`
font-weight:bold;
font-size:16px;
color:#000;
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
font-style:italic;
font-size:16px;
color:#888;
`;

export const PedirMusica = styled.Image`
flex:1;
width:50px;

`;

export const PedirMusicaIcon = styled.Image`

`;

export const PedirMusicaText= styled.Text`

`;

export const SugerirMusica = styled.TouchableOpacity`

`;

export const SugerirMusicaIcon = styled.TouchableOpacity`
max-height:50px;
max-width:50px;
margin:15px;
`;

export const SugerirMusicaText= styled.Text`

`;

export const FooterMenu= styled.Text`
width:100%;
height:85px;
background-color:#154a02;
`;