import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { COLORS } from '../../assets/colors'
import { Shadow } from 'react-native-shadow-2'

export const Frame = (props) => {
  const { onPressFrame, result, image } = props

 const findColor = () => {
   if (result==='win') {
    return COLORS.green
  } else if (result==='loose') {
    return COLORS.red
  }
 } 
  return (
    <Shadow startColor={findColor()}>
       <TouchableOpacity style={styles.container} onPress = {onPressFrame}>
          <Image  style={styles.img} source={{uri: image }} />
       </TouchableOpacity>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
  backgroundColor:'white',
  width: Dimensions.get('window').width* .4,
  height: Dimensions.get('window').height* .22,
  display:'flex',
  justifyContent:'center',
  alignItems: 'center',
  borderRadius:30
  },
  img: {
    width:50,
    height:50,
  },
});
