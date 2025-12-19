import {
  ScrollView,
  StyleSheet,
  Text,
  Share,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, colors} from '../../assets/colors';

export const SettingsScreen = props => {
  const {navigation} = props;

  const onPressBuy = () => {
    navigation.navigate('Buy');
  };
  const onPressRules = () => {
    navigation.navigate('Rules');
  };
  const onPressShare = async () => {
    try {
      const result = await Share.share({
        message: 'Мне нравится приложение',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <ScrollView
        style={[styles.scrollView, {backgroundColor: COLORS.background}]}
        contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity onPress={onPressBuy} style={styles.wrap}>
          <Text style={[styles.title, {color: COLORS.titleColor}]}>
            Покупки
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressRules} style={styles.wrap}>
          <Text style={[styles.title, {color: COLORS.titleColor}]}>
            Правила
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressShare} style={styles.wrap}>
          <Text style={[styles.title, {color: COLORS.titleColor}]}>
            Поделиться
          </Text>
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
  title: {
    fontSize: 25,
    fontFamily: 'Neucha-Regular',
    lineHeight: 25,
  },
  wrap: {
    marginBottom: 10,
    marginTop: 10,
  },
  wrap2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -7,
    marginTop: -7,
  },
});
