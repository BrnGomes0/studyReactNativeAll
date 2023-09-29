import React from 'react'
import {  
    Text,
    StyleSheet,
    Pressable, 
    Image,
 } from 'react-native'
 import Facebook from '../../../assets/imgs/facebook.png'
 import Google from '../../../assets/imgs/google.png'
 import Apple from '../../../assets/imgs/apple.png'



const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor, image}) => {
  return (
    <Pressable onPress={onPress} style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
        ]}>
        
      <Text 
      style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {}
        ]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15, 
        marginVertical: 5, 
        alignItems: 'center',
        borderRadius: 10,
    },
    container_PRIMARY: {
        backgroundColor: '#FF7B58',
    },
    container_SECUNDARY: {
        borderColor: '#FF7B58',
        borderWidth: 2,

    },
    container_TERTIARY: {

    },
    text: {
        fontWeight: 'bold',
        color: 'black'
    },
    text_TERTIARY :{
        color: 'gray'
    },
    text_SECUNDARY:{
        color: '#FF7B58'
    },
    icon: {
        width: 20, 
        height: 20, 
    }
});

export default CustomButton