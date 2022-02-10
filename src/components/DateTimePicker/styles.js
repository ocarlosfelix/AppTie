import styled from 'styled-components/native'

export const Container= styled.View`
flex:1;
alignItems:center;
justifyContent:center;
`;

export const PainelDateTime= styled.View`
flex:1;
align-items:center;
margin:10px;
margin-bottom:20px;
`;

export const TextDateTime= styled.Text`
font-weight:bold;
align-self:flex-start;
flex:2;
margin-left:10px;
font-size:20px;
color:#154a02;
`;

export const DatePickerContainer = styled.View`
    flex:1;
    flex-direction:row;
    alignItems:center;
    justifyContent:center;
    `;
export const BtnPicker = styled.TouchableOpacity`
    borderRadius:10px;        
    width:90%;
    height:40px;
    backgroundColor:#154a02;  
    alignItems:center;
    justifyContent:center;
    align-self:center;
`;
export const BtnText = styled.Text`
    fontSize:20px;
    color:#FFF;
`;