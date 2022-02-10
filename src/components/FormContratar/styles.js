import styled from 'styled-components/native'

export const Formcontratar = styled.ScrollView`
background-color:#154a02;
width:100%;
height:100%;
padding-top:20px;

`;

export const BannerContratar = styled.View`
width:100%;
height:50px;
background-color:#9dbb39;
justify-content:center;
align-items:center;
`;

export const BannerText = styled.Text`
    fontSize:20px;
    font-weight:bold;
    color:#FFF;
`;

export const FormTag = styled.Text`
    fontSize:20px;
    color:#FFF;
    padding-left:20px;
`;

export const EnderecoContainer = styled.View`
    justifyContent:center;
    align-content:space-around;
    flex:1;

`;

export const BairroCidadeContainer = styled.View`
flex:1;
flex-direction:row;
align-self:center;
`;

export const Emailinput = styled.TextInput`
    borderRadius:10px;
    backgroundColor:#fff;
    height:40px;
    margin:10px;
    width:90%;
    paddingLeft:10px;
    align-self:center;
`;

export const Telefoneinput = styled.TextInput`
    borderRadius:10px;
    backgroundColor:#fff;
    height:40px;
    margin:10px;
    width:90%;
    paddingLeft:10px;
    align-self:center;
`;

export const Bairroinput = styled.TextInput`
    borderRadius:10px;
    backgroundColor:#fff;
    height:40px;
    margin:10px;
    width:43%;
    paddingLeft:10px;
`;

export const Cidadeinput = styled.TextInput`
    borderRadius:10px;
    backgroundColor:#fff;
    height:40px;
    margin:10px;
    width:43%;
    paddingLeft:10px;
`;

export const BtnEnviar = styled.TouchableOpacity`
    borderRadius:10px;        
    width:90%;
    height:40px;
    backgroundColor:#9dbb39;
    marginLeft:12px;
    margin:10px;    
    alignItems:center;
    justifyContent:center;
    align-self:center;
    margin-bottom:30px;
`;
export const BtnText = styled.Text`
    fontSize:20px;
    color:#FFF;
`;