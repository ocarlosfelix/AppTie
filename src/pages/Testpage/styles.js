import styled from 'styled-components/native'

export const Sobreview = styled.ImageBackground`
flex:1;
justify-content:flex-start
align-items:center;
paddingTop:30px;
resize-mode:cover;
width:100%;
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
flexDirection:row;
flexWrap:wrap;
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

export const ContadorBox = styled.View`
flex:1;
flex-direction:column;
fontSize:16px;
color:#FFF;
`;

export const PedidosText = styled.Text`
align-self:flex-end;
margin-right:35px;
fontSize:16px;
color:#FFF;
`;

export const PedidosNum = styled.Text`
align-self:flex-end;
margin-right:43px;
fontSize:16px;
color:#0f0;
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

export const MusicRow = styled.View`

`;

export const Scroll = styled.ScrollView`
    width:100%;
`;

export const Item = styled.View`
padding:10px;
flex-direction:row;
marginBottom:5px;
marginTop:5px;
backgroundColor: rgba(255, 255, 255, 0.7);
`;

export const ItemText = styled.Text`
font-weight:bold;
font-size:16px;
color:#000;
`;
export const MusicIdContainer = styled.View`
flex:3;
flex-direction:column;
`;


export const MusicName = styled.Text`
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

`;

TagContainer
export const TagContainer = styled.View`
flex:1;
justify-content:flex-end;
align-items:flex-end;
flex-direction:row;
font-style:italic;
font-size:16px;
color:#888;
`;

export const PrimeiraTag = styled.Text`
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

export const SegundaTag = styled.Text`
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
width:100px;
height:50px;
backgroundColor:#154a02;
marginLeft:12px;
alignItems:center;
justifyContent:center;
`;


export const TextPedirMusica= styled.Text`
fontSize:15px;
color:#FFF;
`;


export const FooterMenu= styled.View`
width:100%;
height:85px;
background-color:#154a02;
`;
