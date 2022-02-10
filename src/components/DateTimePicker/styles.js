import styled from 'styled-components/native'

export const Container= styled.View`
flex:1;
backgroundColor: #154a02;
alignItems:center;
justifyContent:center;
`;

export const PainelDateTime= styled.View`
flex:1;
backgroundColor: #154a02;
align-items:center;
margin:20px;
`;

export const TextDateTime= styled.Text`
font-weight:bold;
flex:2;
font-size:20px;
color:#fff;
margin-top:5px;
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
    backgroundColor:#9dbb39;  
    alignItems:center;
    justifyContent:center;
    align-self:center;
`;
export const BtnText = styled.Text`
    fontSize:20px;
    color:#FFF;
`;