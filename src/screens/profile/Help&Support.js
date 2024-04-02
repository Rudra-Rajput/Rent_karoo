import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const HelpSupport = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'}/>
      <Header title={'Help & Support'} navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#000000', fontWeight: '500', fontSize: 15, letterSpacing: 1}}>No Support available right now</Text>
      </View>
    </View>
  )
}

export default HelpSupport;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
})