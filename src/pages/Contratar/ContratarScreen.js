import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import FormContratar from '../../components/FormContratar';

import { Contratarview, BannerContratar, BannerText
} from "./styles"

function ContratarScreen() {
    return (
        <Contratarview>
            <HeaderComponent/>
            <BannerContratar>
                <BannerText>Peça já seu orçamento!</BannerText>
            </BannerContratar>
            <FormContratar/>
        </Contratarview> 
    )
};

export default ContratarScreen;