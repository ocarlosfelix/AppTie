import styled from 'styled-components/native'

export const Sobreview = styled.ImageBackground`
flex:1;
justify-content:flex-start
align-items:center;
paddingTop:30px;
resize-mode:cover;
width:100%;
`
export const HeaderText = styled.Text`
    fontSize:20px;
    color:#FFF;
    font-weight:bold;
`;

export const DescriptText = styled.Text`
    fontSize:20px;
    color:#FFF;
`;

export const DescriptContainer = styled.View`
width:100%;
margin:15px;
align-items:center;
`;

export const MenuContainer = styled.View`
flex:3;
width:100%;
align-items:center;
`;

export const BtnVerdeClaro = styled.TouchableOpacity`
    borderRadius:10px;        
    width:90%;
    height:80px;
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

export const BtnDescript = styled.Text`
    fontSize:16px;
    color:#888;
`;

export const ProfileScreenView = styled.View`
flex:1;
align-items:center;
margin-top:16px;

`;

export const ProfilePicImage = styled.Image` 
flex:1;
resize-mode:contain;
margin-top:15px;
    
`;
export const ProfilePicText = styled.Text`
    fontSize:25px;
    color:#FFF;
`;