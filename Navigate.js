import React from 'react'
import {  StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './ui/screens/HomeScreen'
import { ReadScreen } from './ui/screens/ReadScreen'
import { NavigationContainer } from '@react-navigation/native'
import closeBook from './assets/images/bookClose.png'
import closeBookPink from './assets/images/bookClosePink.png'
import bookOpen from './assets/images/bookOpen.png'
import bookOpenPink from './assets/images/bookOpenPink.png'

const Tab = createBottomTabNavigator()

export const Navigate = () => {
  return (
<NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { position: 'absolute', top:0 },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => (
          <Image
          style={styles.img}
          source={focused ? closeBookPink : closeBook}
        />
        ),
      }}
    />
    <Tab.Screen
      name="Read"
      component={ReadScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => (
          <Image
          style={styles.img}
          source={focused ? bookOpenPink : bookOpen}
        />
        ),
      }}
    />
  </Tab.Navigator>
</NavigationContainer>
  );
};

const styles = StyleSheet.create({
  img: {
  width:40,
  height:40,
  marginTop:15
  },
});
