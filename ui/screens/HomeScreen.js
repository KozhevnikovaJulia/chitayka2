import React, {useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Level } from '../components/Level'
import { COLORS } from '../../assets/colors'
import { setCurrentLevel, getAllDataFromBack } from '../../bll/reducer'

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch()

  const onChangeLevel = (level) => {
     dispatch(setCurrentLevel(level))
     navigation.navigate('Read')
  }
 
  useEffect(() => {
   dispatch(getAllDataFromBack())
  }, []); 
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentScroll} style={styles.scrollView}>
         <Text style={styles.title}>Читайка</Text>
         <View style={styles.levelsBlock}>
             <View>
                <Level onPressLevel={()=>{onChangeLevel(1)}} level={1}/>
             </View>
             <View style={styles.rowTwoLevel}>
                <Level onPressLevel={()=>{onChangeLevel(2)}} level={2}/>
                <Level onPressLevel={()=>{onChangeLevel(3)}} level={3}/>
             </View>
             <View>
                <Level onPressLevel={()=>{onChangeLevel(4)}} level={4}/>
             </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  flex:1,
  backgroundColor: COLORS.blueSky,
  },
  levelsBlock: {
    height: Dimensions.get('window').height* .7,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
  },
  title: {     
     height: Dimensions.get('window').height* .12,
     fontSize:33,
     color: COLORS.pink,
     textAlign:'center',
     fontFamily:'Oi-Regular',    
  },
  rowTwoLevel: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width: Dimensions.get('window').width* .9,
  },
  contentScroll: {
    paddingBottom:10,
    paddingTop:80
  }
});
