import React from 'react';
import bugatti from '../../images/bugatti.jpg';
import Imagem from '../Imagens';
import {View} from 'react-native'
import {txtThird} from './Textos/textos'

export default Third = props => {


    const descricao = txtThird

    return(

        <View>
            
            <Imagem imagem={bugatti} desc={descricao}></Imagem>

        </View>
    )

}