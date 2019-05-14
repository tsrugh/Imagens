import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fonts } from '../utils/Fonts'

export default Texto = props => {

    const {descricao} = props;
    
    return (

        <View style = {styles.container}>
            <Text style={styles.texto}>
                {descricao}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create(

    {
        container: {
            margin: 20,
            //alignItems: 'center'
        },
        texto: {
            fontSize: 20 ,
            color: 'white',
            fontFamily: Fonts.Heebo
        }
    }
)