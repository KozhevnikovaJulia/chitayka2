import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Level} from '../components/Level';
import {COLORS} from '../../assets/colors';
import {setCurrentLevel, getAllDataFromBackNEW} from '../../bll/reducer';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const allDataFromBack = useSelector(state => state.app.allDataFromBack);
  console.error('all', allDataFromBack);
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
        <Text style={styles.title}>Читайка</Text>

        <View style={styles.levelsBlock}>
          <View>
            <Level
              onPressLevel={() => {
                onChangeLevel(1);
              }}
              level={1}
              title={'Очень короткие слова'}
            />
          </View>
          <Level
            onPressLevel={() => {
              onChangeLevel(2);
            }}
            level={2}
            title={'Короткие слова'}
          />
          <Level
            onPressLevel={() => {
              onChangeLevel(3);
            }}
            level={3}
            title={'Средней длины слова'}
          />
          <View>
            <Level
              onPressLevel={() => {
                onChangeLevel(4);
              }}
              level={4}
              title={'Длинные слова'}
            />
          </View>
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
  levelsBlock: {
    height: Dimensions.get('window').height * 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    height: Dimensions.get('window').height * 0.12,
    fontSize: 55,
    fontWeight: 'bold',
    color: COLORS.main,
    textAlign: 'center',
    // fontFamily: 'Oi-Regular',
  },
  rowTwoLevel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
  contentScroll: {
    paddingBottom: 10,
    paddingTop: 80,
  },
});
