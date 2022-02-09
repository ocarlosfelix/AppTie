import styled from 'styled-components/native'

export const Contratarview = styled.View`
flex:1;
padding-top:30px;
alignItems:center;
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

export const ContadorContainer = styled.View`

    borderRadius:10px;        
    width:90%;
    height:160px;
    backgroundColor:#154a02;
    marginLeft:12px;
    margin:10px;    
    alignItems:center;
    justifyContent:center;
`;

export const ShowsContainer = styled.View`
    borderRadius:10px;        
    width:90%;
    height:40px;
    backgroundColor:#9dbb39;
    marginLeft:12px;
    margin:10px;    
    alignItems:center;
    justifyContent:center;
`;

export const PedidosContainer = styled.View`
    borderRadius:10px;        
    width:90%;
    height:40px;
    backgroundColor:#9dbb39;
    marginLeft:12px;
    margin:10px;    
    alignItems:center;
    justifyContent:center;
`;

export const TextContador = styled.Text`
    fontSize:20px;
    color:#FFF;
`;

export const BtnVerdeClaro = styled.TouchableOpacity`
    borderRadius:10px;        
    width:90%;
    height:80px;
    backgroundColor:#9dbb39;
    marginLeft:12px;
    margin:10px;    
    alignItems:center;
    justifyContent:center;
`;

export const BtnVerdeEscuro = styled.TouchableOpacity`
    borderRadius:10px;        
    width:90%;
    height:40px;
    backgroundColor:#154a02;
    marginLeft:12px;
    margin:10px;    
    alignItems:center;
    justifyContent:center;
`;

export const BtnText = styled.Text`
    fontSize:20px;
    color:#FFF;
`;
