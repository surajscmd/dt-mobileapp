import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, useThemeColor, View } from '@/components/Themed';
import React from 'react'

const Buttoncls = ({title, onPress ,width}) => {
 const textColor = useThemeColor(
    { light: '#fff', dark: '#000' }, 
    'text'
  );
  const backgroundColor = useThemeColor(
    { light: '#000', dark: '#fff' }, 
    'text'
  );
  
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, { backgroundColor : backgroundColor , width: width }]}>
           <Text style={[styles.buttonText, { color: textColor }]} >{title}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        borderRadius:2,
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    buttonText:{
    
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"

    }
})

export default Buttoncls