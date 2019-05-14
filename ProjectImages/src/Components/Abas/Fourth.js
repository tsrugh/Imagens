import React from 'react';
import { View, Button, Image, TouchableOpacity, StyleSheet, CameraRoll, ScrollView } from 'react-native'
import icon_gallery128 from '../../images/Icons/icon_gallery128.png';
import icon_gallery64_branc from '../../images/Icons/icon_gallery64_branc.png';
import ImagePicker from 'react-native-image-picker';


export default class Fourth extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            photo: null
        }

    }

    handleChoosePhoto = () => {

        const options = {
            noData: true
        };

        ImagePicker.launchImageLibrary(options, response => {

            if (response.uri) {
                this.setState({ photo: response })
            }

        })

    }


    render() {

        const { photo } = this.state

        return (

            photo ?

                <View style={{margin: 16}}>

                    {photo && (
                        <Image
                            source={{ uri: photo.uri }}
                            style={{width: '90%', height: '50%', alignSelf:'center', borderRadius: 10}}
                            resizeMethod='resize'

                        />
                    )}
                    <TouchableOpacity onPress={() => this.handleChoosePhoto()} style={[styles.container, {marginTop: '60%'}]}>
                        <Image source={icon_gallery64_branc}></Image>
                    </TouchableOpacity>
                    {/* <Button title="Choose Photo" onPress={this.handleChoosePhoto} /> */}
                </View>

                :

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => this.handleChoosePhoto()} style={styles.container}>
                        <Image source={icon_gallery128}></Image>
                    </TouchableOpacity>
                </View>
        )

    }

}




const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    }

})