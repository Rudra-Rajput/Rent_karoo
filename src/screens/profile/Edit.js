import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../../components/Header'
import { TextInput } from 'react-native-paper'
import Button from '../../components/Button'

const Edit = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'} />

      <Header title={'Edit Profile'} navigation={navigation}/>

      <View style={styles.profileContainer}>
         <Image source={{uri: 'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw'}} style={styles.profilePic}/>
         <TouchableOpacity activeOpacity={0.8} style={styles.cameraContainer}>
            <Entypo name='camera' size={20} color={'#000000'}/>
         </TouchableOpacity>
      </View>

      <View style={[styles.inputContainer, {marginTop: '10%'}]}>
        <TextInput mode='flat' keyboardType='name-phone-pad' value='Rudra Pratap Singh' label={'Name'} style={styles.input}/>
      </View>
      <View style={[styles.inputContainer, {marginTop: '5%'}]}>
        <TextInput mode='flat' keyboardType='email-address' value='rudransh@example.com' label={'Email'} style={styles.input}/>
      </View>
      <View style={[styles.inputContainer, {marginTop: '5%'}]}>
        <TextInput mode='flat' keyboardType='number-pad' value='+91 | 9555123085' label={'Phone'} style={styles.input}/>
      </View>

      <View style={{marginTop: '20%'}}>
         <Button title={'Save'} backgroundColor={'#28802c'}/>
      </View>

    </View>
  )
}

export default Edit

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    profileContainer: {
       width: 150,
       height: 150,
       borderRadius: 150,
       marginTop: '5%',
       alignSelf: 'center'

    },
    profilePic: {
       width: 150,
       height: 150,
       borderRadius: 10,
       resizeMode: 'contain'
    },
    cameraContainer: {
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        right: -2.5,
        bottom: -2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '85%',
        alignSelf: 'center'
    },
    input: {
        backgroundColor: '#FFFFFF'
    },
})