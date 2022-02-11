import styled from 'styled-components/native'

export const Item = styled.View`
padding:10px;
flex-direction:row;
marginBottom:5px;
marginTop:5px;
backgroundColor: rgba(255, 255, 255, 0.7);
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

export const TagContainer = styled.View`
flex:1;
justify-content:flex-end;
align-items:flex-end;
flex-direction:row;
font-style:italic;
font-size:16px;
color:#888;
`;

export const tagPrimaria = styled.Text`
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

export const tagSecundaria = styled.Text`
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

