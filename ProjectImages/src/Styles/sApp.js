import Colors from '../Constants/Colors';
import {StyleSheet} from 'react-native'

const {background, header, text} = Colors

const styles = StyleSheet.create({
    container: {
        backgroundColor: background
    },
    header: {
      backgroundColor: header
    },
    texto: {
      color: text
    }
  });

export default styles;