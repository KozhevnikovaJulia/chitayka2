import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {COLORS} from '../../assets/colors';
import {Shadow} from 'react-native-shadow-2';

export const Frame = props => {
  const {onPressFrame, result, image} = props;

  const findColor = () => {
    if (result === '') {
      return COLORS.background2;
    }
    if (result === 'win') {
      return COLORS.green;
    } else if (result === 'loose') {
      return COLORS.red;
    }
  };
  return (
    <Shadow startColor={findColor()} distance={15}>
      <TouchableOpacity style={styles.container} onPress={onPressFrame}>
        <Image style={styles.img} source={{uri: image}} />
      </TouchableOpacity>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
