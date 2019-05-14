import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import Texto from './Textos'

export default Imagem = props => {


    const { imagem, desc } = props

    return (

        <View style={styles.container}>

            <ImageBackground source={imagem}
                style={[{ width: '100%', height: '50%' }, styles.imagem]}
                borderRadius={10}
            >
            </ImageBackground>
            
            <Texto descricao={desc}></Texto>

        </View>
    )

}

const styles = StyleSheet.create(

    {
        container: {
            padding: 16,
            alignItems: 'center'
        }
    }
)