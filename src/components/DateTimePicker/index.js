import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { StatusBar } from 'expo-status-bar';
import { BtnPicker, BtnText, Container, DatePickerContainer, PainelDateTime, TextDateTime } from '../../components/DateTimePicker/styles'

export default function DateTimePick(){
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textdate, setTextDate] = useState('Escolha o dia');
    const [texttime, setTextTime] = useState('Escolha a hora')

    const onChange = (event, selectDate) => {
        const currentDate = selectDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + 'H' + tempDate.getMinutes();
        setTextDate(fDate)
        setTextTime(fTime)

        console.log(fDate + ' (' + fTime + ')')
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

return(
    <Container>

        
    
        <DatePickerContainer>

        <PainelDateTime>
        <TextDateTime>{textdate}</TextDateTime>
            <BtnPicker onPress={() => showMode('date')}>
                <BtnText>Dia do Show</BtnText>
            </BtnPicker>      
        </PainelDateTime>
        
        <PainelDateTime>
        <TextDateTime>{texttime}</TextDateTime>
            <BtnPicker onPress={() => showMode('time')}>
                <BtnText>Hora de início</BtnText>
            </BtnPicker>
        </PainelDateTime>

        </DatePickerContainer>

        {show && (
            <DateTimePicker
            testId='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
            minimumDate={new Date(2022, 0, 1)}
            minuteInterval={10}
            type='default'
            />)}

        <StatusBar style="auto" />
    </Container>
    );
}

;