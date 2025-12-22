import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {COLORS} from '../../assets/colors';
import {Shadow} from 'react-native-shadow-2';

export const Level = props => {
  const {onPressLevel, img, title} = props;
  return (
    <Shadow distance={15}>
      <TouchableOpacity style={styles.container} onPress={onPressLevel}>
        <Text style={styles.text}>{title} </Text>
        <Image style={styles.img} source={img} />
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
    width: 45,
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
