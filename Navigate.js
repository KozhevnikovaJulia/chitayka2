import {StyleSheet, Image} from 'react-native';
import {HomeScreen} from './ui/screens/HomeScreen';
import {ReadScreen} from './ui/screens/ReadScreen';
import {BuyScreen} from './ui/screens/BuyScreen';
import {RulesScreen} from './ui/screens/RulesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import settings from './assets/images/settings.png';
import homeActive from './assets/images/noun-home-3363767NEW.png';
import cross from './assets/images/cross.png';
import {SettingsScreen} from './ui/screens/SettingsScreen';
import {COLORS} from './assets/colors';
import {ImgButton} from './ui/components/ImgButton';

const Stack = createStackNavigator();

export const Navigate = props => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

function RootNavigator(props) {
  const bgStartColor = COLORS.background;
  const titleColor = COLORS.titleColor;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: bgStartColor},
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation, route}) => ({
          title: 'HOME'.toUpperCase(),
          headerTitleStyle: {
            color: bgStartColor,
          },
        })}
      />
      <Stack.Screen
        name="Read"
        component={ReadScreen}
        options={({navigation, route}) => ({
          title: 'ЧТЕНИЕ'.toUpperCase(),
          headerTitleStyle: {
            color: bgStartColor,
          },
          headerLeft: () => (
            <ImgButton
              onPress={() => {
                navigation.navigate('Home');
              }}
              img={homeActive}
              width={40}
              height={40}
            />
          ),
          // headerRight: () => (
          //   <ImgButton
          //     onPress={() => {
          //       navigation.navigate('Settings');
          //     }}
          //     img={settingsActive}
          //     width={40}
          //     height={40}
          //   />
          // ),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({navigation, route}) => ({
          title: 'НАСТРОЙКИ'.toUpperCase(),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: titleColor,
          },
          headerLeft: () => (
            <ImgButton
              onPress={() => {
                navigation.navigate('Home');
              }}
              img={cross}
              width={40}
              height={40}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Rules"
        component={RulesScreen}
        options={({navigation, route}) => ({
          title: 'ПРАВИЛА'.toUpperCase(),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: titleColor,
          },
          headerLeft: () => (
            <ImgButton
              onPress={() => {
                navigation.navigate('Settings');
              }}
              img={cross}
              width={40}
              height={40}
            />
          ),
        })}
      />

      <Stack.Screen
        name="Buy"
        component={BuyScreen}
        options={({navigation, route}) => ({
          title: 'ПОКУПКИ'.toUpperCase(),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: titleColor,
          },
          headerLeft: () => (
            <ImgButton
              onPress={() => {
                navigation.navigate('Settings');
              }}
              img={cross}
              width={40}
              height={40}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    marginTop: 15,
  },
});
