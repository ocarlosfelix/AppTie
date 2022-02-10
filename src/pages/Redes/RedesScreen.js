import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import DateTimePick from '../../components/DateTimePicker/index';

import { Redesview, ContadorContainer, ShowsContainer,
    TextContador, PedidosContainer
} from "./styles"

function RedesScreen() {
    return (
        <Redesview>

        <HeaderComponent/>
        <DateTimePick/>
   </Redesview> 
    )
};

export default RedesScreen;