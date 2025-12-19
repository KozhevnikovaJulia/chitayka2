import React from 'react';
import {useSelector} from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../assets/colors';

export const BuyScreen = props => {
  const {navigation} = props;
  const theme = useSelector(state => state.save.theme);
  let activeColors = colors[theme];

  const onBuyHard = () => {};
  const onBuyExtreme = () => {};
  const onBuyPremium = () => {};

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <ScrollView
        style={[
          styles.scrollView,
          {backgroundColor: activeColors.backgroundColor},
        ]}
        contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity onPress={onBuyHard} style={styles.wrap}>
          <Text style={[styles.text, {color: activeColors.textColor}]}>
            Пакет 'HARD'
          </Text>
          <Text style={styles.redText}>49 ₽</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBuyExtreme} style={styles.wrap}>
          <Text style={[styles.text, {color: activeColors.textColor}]}>
            Пакет 'EXTREME'
          </Text>
          <Text style={styles.redText}>49 ₽</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBuyPremium} style={styles.wrap}>
          <Text style={[styles.text, {color: activeColors.textColor}]}>
            Пакет Премиум (все режимы доступны)
          </Text>
          <Text style={styles.redText}>90 ₽</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Neucha-Regular',
    lineHeight: 25,
  },
  redText: {
    fontSize: 20,
    fontFamily: 'Neucha-Regular',
    lineHeight: 25,
    color: 'red',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
});
