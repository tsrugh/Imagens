import React from 'react';
import sirius from '../../images/sirius.jpg';
import Imagem from '../Imagens';
import {View} from 'react-native';
import {txtFifth} from './Textos/textos'


export default Fifth = props => {


    const descricao = txtFifth
    
    return(

        <View>
            
            <Imagem imagem={sirius} desc={descricao}></Imagem>

        </View>
    )

}