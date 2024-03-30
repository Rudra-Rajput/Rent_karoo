import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'

const Notification = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Header title={'Notification'} navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.notificationText}>No Notifications</Text>
          <Text style={styles.notificationText1}>Check back here for updates!</Text>
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    notificationText: {
        fontSize: 17,
        color: '#000000',
        letterSpacing: 1,
        fontWeight: '700'
    },
    notificationText1: {
        fontSize: 15,
        color: '#000000',
        letterSpacing: 1,
        fontWeight: '500',
        opacity: 0.5,
        marginTop: '2%'
    }
})