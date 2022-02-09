import styled from 'styled-components/native'

export const Header = styled.View`
flex-direction:row;
justify-content: space-around;
align-items:center;
width:100%;
background-color:#154a02;
`;

export const ProfileBox = styled.TouchableOpacity`
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