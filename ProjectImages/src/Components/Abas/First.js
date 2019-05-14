import React from 'react';
import corona from '../../images/corona.jpg';
import Imagem from '../Imagens';
import {View} from 'react-native';
import {txtFirst} from './Textos/textos'

export default First = props => {

    const desc = txtFirst;
    return(

        <View>         
            <Imagem imagem={corona} desc={desc}></Imagem>
            {/* <Footer></Footer> */}
        </View>

    )

}