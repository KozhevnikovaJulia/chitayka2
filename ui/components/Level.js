import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import starActive from '../../assets/images/starActive.png';
import starEmpty from '../../assets/images/starEmpty.png';
import {COLORS} from '../../assets/colors';
import {Shadow} from 'react-native-shadow-2';

export const Level = props => {
  const {onPressLevel, level, title} = props;
  const arrLevelNumbers = [1, 2, 3, 4];
  return (
    <Shadow distance={15}>
      <TouchableOpacity style={styles.container} onPress={onPressLevel}>
        <Text style={styles.text}>{title} </Text>
        <View style={styles.starsWrapper}>
          {arrLevelNumbers.map(item => {
            return (
              <Image
                style={styles.img}
                source={item < level || item === level ? starActive : starEmpty}
              />
            );
          })}
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  starsWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.grey,
    textAlign: 'center',
    marginBottom: 10,
  },
});
