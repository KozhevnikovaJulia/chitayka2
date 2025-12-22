import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';

export const ArrowButton = props => {
  const {onPress, direction} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Image style={styles.img} source={direction === 'right' ? right : left} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    maxWidth: 120,
    maxHeight: 80,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  img: {
    width: 95,
    height: 70,
  },
});
