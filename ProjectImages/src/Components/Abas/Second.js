import React, { useState } from 'react';


import { TouchableOpacity, ImageBackground, ScrollView, View, CameraRoll, PermissionsAndroid, Image, } from 'react-native';
import { RNCamera } from 'react-native-camera';

import icon_camera128 from '../../images/Icons/icon_camera128.png';
import icon_camera64branc from '../../images/Icons/icon_camera64_branc.png';
import icon_cancell from '../../images/Icons/remove.png'
import icon_accept from '../../images/Icons/icon_accept.png'

import {styles} from '../../Styles/sSecond'

export default Second = () => {

    const [imageUri, setImageUri] = useState(null);
    const [isRender, setIsRender] = useState(null);
    const [veri, setVeri] = useState(null);

    acao = () => {
        setIsRender(true);
        setVeri(false);
        setImageUri(false)
        console.log(isRender)
    }

    takePicture = async () => {
        try {
            if (this.camera) {
                const options = {
                    quality: 0.5,
                    base64: true,
                    forceUpOrientation: true,
                    fixOrientation: true
                };

                const { uri } = await this.camera.takePictureAsync(options);

                setImageUri(uri);
            }
        } catch (error) {
            alert(error.message)
        }

    }

    submitPicture = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    "title": "Access Storage",
                    "message": "Access Storage for the pictures"
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                await CameraRoll.saveToCameraRoll(imageUri);
            } else {
                console.log("Permissao de camera negada.");
            }
        } catch (err) {
            console.log(err);
        }
        setIsRender(false);
        setVeri(true);

    }

    return (

        veri ? 

        <View style={{margin: 16}}>
            <Image style={styles.imagemPlot} source={{ uri: imageUri }}></Image> 
            <TouchableOpacity onPress={() => this.acao()} style={[styles.container, {marginTop: '60%'}]}>
                    <Image source={icon_camera64branc}></Image>
            </TouchableOpacity>
        </View>
        
        : 
        
        isRender ?

            imageUri ?

                <ImageBackground style={styles.preview} source={{ uri: imageUri }}>
                    <ScrollView></ScrollView>
                    <View style={styles.buttonsPreview}>
                        <TouchableOpacity onPress={() => setImageUri(null)}>
                            <Image source={icon_cancell}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => submitPicture()}>
                            <Image source={icon_accept
                        }></Image>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>

                :

                <RNCamera
                    ref={camera => { this.camera = camera; }}
                    style={styles.camera}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >

                    <TouchableOpacity onPress={takePicture} style={styles.button}></TouchableOpacity>

                </RNCamera>

            :


            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => this.acao()} style={styles.container}>
                    <Image source={icon_camera128}></Image>
                </TouchableOpacity>

            </View>

    )

}
