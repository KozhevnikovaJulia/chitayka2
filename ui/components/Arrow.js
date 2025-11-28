import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import right from '../../assets/images/right.png'
import left from '../../assets/images/left.png'
import { COLORS } from '../../assets/colors'

export const Arrow = (props) => {
  const { onPressArrow, direction } = props
  return (
    <TouchableOpacity style={styles.container} onPress = {onPressArrow}>
        <Image style={styles.img} source={direction==='right'? right : left} />
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
  backgroundColor: COLORS.blueSky,
  width: Dimensions.get('window').width* .3,
  height: Dimensions.get('window').height* .15,
  display:'flex',
  justifyContent:'center',
  alignItems: 'center',
  borderRadius:30
  },
  img: {
    width: 90,
    height:  90
  },
});
