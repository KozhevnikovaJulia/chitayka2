import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Frame} from '../components/Frame';
import row from '../../assets/images/rowBlue.png';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';
import bottom2 from '../../assets/images/bottom2.png';
import {shuffle} from '../../helpers';
import {ArrowButton} from '../components/ArrowButton';
import {useFocusEffect} from '@react-navigation/native';
import {COLORS} from '../../assets/colors';
import {ImgButton} from '../components/ImgButton';

const Sound = require('react-native-sound');
Sound.setCategory('Playback');

const loose = new Sound('loose.wav', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
const win = new Sound('win.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

export const ReadScreen = ({navigation}) => {
  const currentLevel = useSelector(state => state.app.currentLevel);
  const allDataFromBack = useSelector(state => state.app.allDataFromBack);
  const dispatch = useDispatch();

  const [currentObj, setCurrentObj] = useState({});
  const currentWord = Object.keys(currentObj).length > 0 ? currentObj.word : '';
  const [currentPosition, setCurrentPosition] = useState('');
  const positionArr = [1, 2, 3, 4];

  const [imgFrame1, setImgFrame1] = useState('');
  const [imgFrame2, setImgFrame2] = useState('');
  const [imgFrame3, setImgFrame3] = useState('');
  const [imgFrame4, setImgFrame4] = useState('');

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      const currentDataFromBackArr = allDataFromBack.filter(
        item => item.level === currentLevel,
      );
      const currentIndex = Math.floor(
        Math.random() * currentDataFromBackArr.length,
      );
      const currentObj = currentDataFromBackArr[currentIndex];
      setCurrentObj(currentObj);

      const currentPosition = Math.floor(Math.random() * positionArr.length);
      setCurrentPosition(currentPosition);

      const currentImage = currentObj ? currentObj.img : '';

      const currentDataFromBackArrWithoutCurrentObj = shuffle(
        currentDataFromBackArr.filter(item => item.word !== currentObj.word),
      );
      if (currentPosition === 0) {
        setImgFrame1(currentImage);
        setImgFrame2(currentDataFromBackArrWithoutCurrentObj[0].img);
        setImgFrame3(currentDataFromBackArrWithoutCurrentObj[1].img);
        setImgFrame4(currentDataFromBackArrWithoutCurrentObj[2].img);
      } else if (currentPosition === 1) {
        setImgFrame1(currentDataFromBackArrWithoutCurrentObj[0].img);
        setImgFrame2(currentImage);
        setImgFrame3(currentDataFromBackArrWithoutCurrentObj[1].img);
        setImgFrame4(currentDataFromBackArrWithoutCurrentObj[2].img);
      } else if (currentPosition === 2) {
        setImgFrame1(currentDataFromBackArrWithoutCurrentObj[0].img);
        setImgFrame2(currentDataFromBackArrWithoutCurrentObj[1].img);
        setImgFrame3(currentImage);
        setImgFrame4(currentDataFromBackArrWithoutCurrentObj[2].img);
      } else if (currentPosition === 3) {
        setImgFrame1(currentDataFromBackArrWithoutCurrentObj[0].img);
        setImgFrame2(currentDataFromBackArrWithoutCurrentObj[1].img);
        setImgFrame3(currentDataFromBackArrWithoutCurrentObj[2].img);
        setImgFrame4(currentImage);
      }
      setAnswer1('');
      setAnswer2('');
      setAnswer3('');
      setAnswer4('');
      return () => {};
    }, [currentLevel]),
  );

  const onPressFrame1 = () => {
    loose.setVolume(2);
    win.setVolume(2);
    currentPosition === 0 ? win.play() : loose.play();
    currentPosition === 0 ? setAnswer1('win') : setAnswer1('loose');
  };
  const onPressFrame2 = () => {
    loose.setVolume(2);
    win.setVolume(2);
    currentPosition === 1 ? win.play() : loose.play();
    currentPosition === 1 ? setAnswer2('win') : setAnswer2('loose');
  };
  const onPressFrame3 = () => {
    loose.setVolume(2);
    win.setVolume(2);
    currentPosition === 2 ? win.play() : loose.play();
    currentPosition === 2 ? setAnswer3('win') : setAnswer3('loose');
  };
  const onPressFrame4 = () => {
    loose.setVolume(2);
    win.setVolume(2);
    currentPosition === 3 ? win.play() : loose.play();
    currentPosition === 3 ? setAnswer4('win') : setAnswer4('loose');
  };
  const onPressNextArrow = () => {
    navigation.navigate('Read');
    const currentDataFromBackArr = allDataFromBack.filter(
      item => item.level === currentLevel,
    );
    const currentIndex = Math.floor(
      Math.random() * currentDataFromBackArr.length,
    );
    const currentObj = currentDataFromBackArr[currentIndex];
    setCurrentObj(currentObj);

    const currentPosition = Math.floor(Math.random() * positionArr.length);
    setCurrentPosition(currentPosition);

    const currentImage = currentObj ? currentObj.img : '';

    const currentDataFromBackArrWithoutCurrentObj = shuffle(
      currentDataFromBackArr.filter(item => item.word !== currentObj.word),
    );
    if (currentPosition === 0) {
      setImgFrame1(currentImage);
      setImgFrame2(currentDataFromBackArrWithoutCurrentObj[0].img);
      setImgFrame3(currentDataFromBackArrWithoutCurrentObj[1].img);
      setImgFrame4(currentDataFromBackArrWithoutCurrentObj[2].img);
    } else if (currentPosition === 1) {
      setImgFrame1(currentDataFromBackArrWithoutCurrentObj[0].img);
      setImgFrame2(currentImage);
      setImgFrame3(currentDataFromBackArrWithoutCurrentObj[1].img);
      setImgFrame4(currentDataFromBackArrWithoutCurrentObj[2].img);
    } else if (currentPosition === 2) {
      setImgFrame1(currentDataFromBackArrWithoutCurrentObj[0].img);
      setImgFrame2(currentDataFromBackArrWithoutCurrentObj[1].img);
      setImgFrame3(currentImage);
      setImgFrame4(currentDataFromBackArrWithoutCurrentObj[2].img);
    } else if (currentPosition === 3) {
      setImgFrame1(currentDataFromBackArrWithoutCurrentObj[0].img);
      setImgFrame2(currentDataFromBackArrWithoutCurrentObj[1].img);
      setImgFrame3(currentDataFromBackArrWithoutCurrentObj[2].img);
      setImgFrame4(currentImage);
    }
    setAnswer1('');
    setAnswer2('');
    setAnswer3('');
    setAnswer4('');
  };
  const onPressBackButton = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentScroll}
        style={styles.scrollView}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{currentWord}</Text>
        </View>

        <Image style={styles.img} source={row} />
        <View style={styles.framesBlock}>
          <View style={styles.row}>
            <Frame
              onPressFrame={onPressFrame1}
              result={answer1}
              image={imgFrame1}
            />
            <Frame
              onPressFrame={onPressFrame2}
              result={answer2}
              image={imgFrame2}
            />
          </View>
          <View style={styles.row}>
            <Frame
              onPressFrame={onPressFrame3}
              result={answer3}
              image={imgFrame3}
            />
            <Frame
              onPressFrame={onPressFrame4}
              result={answer4}
              image={imgFrame4}
            />
          </View>
        </View>
        <Image style={styles.img} source={bottom2} />
        <View style={styles.btnsBlock}>
          <ImgButton
            onPress={onPressBackButton}
            img={left}
            width={Dimensions.get('window').width * 0.2}
            height={Dimensions.get('window').height * 0.1}
          />
          <ImgButton
            onPress={onPressNextArrow}
            img={right}
            width={Dimensions.get('window').width * 0.2}
            height={Dimensions.get('window').height * 0.1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentScroll: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.14,
    zIndex: -1,
  },
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.1,
  },
  title: {
    fontSize: 35,
    fontFamily: 'Oi-Regular',
    color: '#d37191',
  },
  btnsBlock: {
    width: Dimensions.get('window').width * 0.7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
  },
  framesBlock: {
    height: Dimensions.get('window').height * 0.42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.blueSky,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
});
