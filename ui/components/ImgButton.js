import {useSelector} from 'react-redux';
import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors';

export const ImgButton = props => {
  const {onPress, img, width, height} = props;

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.appButtonContainer,
          {backgroundColor: COLORS.background},
        ]}>
        <Image style={{width: width, height: height}} source={img} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.2,
    // height: Dimensions.get('window').height * 0.1,
    borderWidth: 0,
  },
});
