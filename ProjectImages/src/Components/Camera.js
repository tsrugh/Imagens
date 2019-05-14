import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, ImageBackground, ScrollView, View, CameraRoll, PermissionsAndroid, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import icon_negative64 from '../images/Icons/icon_negative64.png'
import icon_afirmative64 from '../images/Icons/icon_afirmative64.png'


export default Camera = () => {

    const [imageUri, setImageUri] = useState(null);

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

                alert("Ok");

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
            console.log("aiusdgaiusdaisdas")
        }

        setImageUri(null);
    }

    return (

        imageUri ?

            <ImageBackground style={styles.preview} source={{ uri: imageUri }}>
                <ScrollView></ScrollView>
                <View style={styles.buttonsPreview}>
                    <TouchableOpacity onPress={() => setImageUri(null)}>
                        <Image source = {icon_negative64}></Image>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => submitPicture()}>
                        <Image source = {icon_afirmative64}></Image>
                    </TouchableOpacity>

                    {/* <Icon name="check" size={25} color="#fff" onPress={() => submitPicture()} /> */}
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

                <TouchableOpacity onPress={takePicture} style={styles.button}>
                    <Text style={styles.texto}>Foto</Text>
                </TouchableOpacity>

            </RNCamera>
    )

}


const styles = StyleSheet.create({
    camera: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        alignSelf: "flex-end",
        backgroundColor: "rgb(190, 34, 13)",
        color: "#fff",
        padding: 35,
        borderRadius: 50,
        marginBottom: 20
        
    },
    preview: {
        width: "100%",
        height: "100%",
        flex: 1
    },
    buttonsPreview: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 5
    },
    texto: {
        color: '#fff'
    }
});