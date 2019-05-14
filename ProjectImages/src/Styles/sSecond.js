import {StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';
export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        alignSelf: "flex-end",
        // backgroundColor: "rgb(190, 34, 13)",
        backgroundColor: Colors.button,
        borderColor: Colors.border,
        borderWidth: 4,
        color: "#fff",
        padding: 45,
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
        padding: 5,
        marginBottom: 10
    },
    imagem: {
        width: "50%",
        height: "50%",
        flex: 1
    },
    imagemPlot: {
        width: '90%', 
        height: '50%', 
        alignSelf:'center', 
        borderRadius: 10
    }
})