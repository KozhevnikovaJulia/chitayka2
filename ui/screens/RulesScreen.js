import React from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, StyleSheet, Text, SafeAreaView} from 'react-native';
import {colors} from '../../assets/colors';

export const RulesScreen = props => {
  const {navigation} = props;
  const theme = useSelector(state => state.save.theme);
  let activeColors = colors[theme];

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <ScrollView
        style={[
          styles.scrollView,
          {backgroundColor: activeColors.backgroundColor},
        ]}
        contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.text, {color: activeColors.textColor}]}>
          Игроки читают вопросы по одному.
        </Text>
        <Text style={[styles.text, {color: activeColors.textColor}]}>
          После прочтения вопроса каждый игрок должен ответить, делал он это или
          нет.
        </Text>
        <Text style={[styles.text, {color: activeColors.textColor}]}>
          Всем, кто ответил 'да' следует выпить. А те, кто ответил 'нет' должны
          выполнить задание, которое будет на экране.
        </Text>
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
});
