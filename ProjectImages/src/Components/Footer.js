import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import icon_gallery64 from '../images/Icons/icon_gallery64.png'
import icon_camera64 from '../images/Icons/icon_camera64.png'

export default Footer = props => {


    acao = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <TouchableOpacity onPress={() => acao}>
                    <Image source={icon_camera64}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => acao}>
                    <Image source={icon_gallery64}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        //justifyContent: "space-around",
        //padding: 5,
        
        //flexDirection: 'column',
        width: "100%",
        height: "100%",
        flex: 1,
        //backgroundColor: 'red'
        marginBottom: -50
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-around",
        //padding: 5,
        

    },

})