import React, {useEffect} from 'react';
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
import {Level} from '../components/Level';
import {COLORS} from '../../assets/colors';
import row from '../../assets/images/rowBlue.png';
import bottom from '../../assets/images/bottom.png';
import boy from '../../assets/images/boy.png';
import level1 from '../../assets/images/level1.png';
import level2 from '../../assets/images/level2.png';
import level3 from '../../assets/images/level3.png';
import level4 from '../../assets/images/level4.png';
import {setCurrentLevel, getAllDataFromBackNEW} from '../../bll/reducer';

export const HomeScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const allDataFromBack = useSelector(state => state.app.allDataFromBack);
  console.log(allDataFromBack);

  const onChangeLevel = level => {
    dispatch(setCurrentLevel(level));
    navigation.navigate('Read');
  };

  useEffect(() => {
    dispatch(getAllDataFromBackNEW());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentScroll}
        style={styles.scrollView}>
        <View style={styles.titleBlock}>
          <Image source={boy} style={{width: 50, height: 70}} />
          <Text style={styles.title}>ЧИТАЙКА</Text>
        </View>

        <Image style={styles.img} source={row} />

        <View style={styles.levelsBlock}>
          <Level
            onPressLevel={() => {
              onChangeLevel(1);
            }}
            img={level1}
            title={'Очень короткие слова'}
          />

          <Level
            onPressLevel={() => {
              onChangeLevel(2);
            }}
            img={level2}
            title={'Короткие слова'}
          />

          <Level
            onPressLevel={() => {
              onChangeLevel(3);
            }}
            img={level3}
            title={'Средней длины слова'}
          />

          <Level
            onPressLevel={() => {
              onChangeLevel(4);
            }}
            img={level4}
            title={'Длинные слова'}
          />
        </View>

        <Image style={styles.imgBottom} source={bottom} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  levelsBlock: {
    height: Dimensions.get('window').height * 0.45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.blueSky,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.14,
  },
  imgBottom: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.14,
    zIndex: -1,
  },
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.2,
  },
  title: {
    fontSize: 35,
    fontFamily: 'Oi-Regular',
    color: '#d37191',
  },
});
