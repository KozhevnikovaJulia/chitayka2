import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Navigate } from './Navigate'
import { Provider } from 'react-redux'
import { store } from './bll/store'

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigate/>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  flex:1
  },
});
