import { StyleSheet, View, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../../components/Header'
import { TextInput } from 'react-native-paper'
import Button from '../../components/Button'
import {useUpdateUserProfileMutation} from '../../redux/services/Profile'
import {useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import Toast from '../../components/Toast'

const Edit = ({navigation, route}) => {

  const [toastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleAnimationComplete = () => {
    setToastVisible(false);
  };

  const {data} = route.params
  const {token} = useSelector(state => state.auth);
  const [updateProfile, {isLoading}] = useUpdateUserProfileMutation();

  const [firstName, setFirstName] = useState(data?.data?.firstName || "");
  const [lastName, setLastName] = useState(data?.data?.lastName || "");
  const [email, setEmail] = useState(data?.data?.email || "");
  const [phoneNo, setPhoneNo] = useState(data?.data?.phoneNo || "");
  const [picture, setPicture] = useState(data?.data?.picture);
  const [selectedpic, setSelectedPic] = useState(false);

  const selectDocument = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setPicture(doc[0]);
      setSelectedPic(true)
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
      } else {
        console.log(error);
      }
    }
  };

  const handleSubmit = async () => {
    const data = new FormData()
    data.append('firstName', firstName)
    data.append('lastName', lastName)
    data.append('email', email)
    data.append('phoneNo', phoneNo)
    if (selectedpic === true) {
      data.append('picture', picture)
    }
    const res = await updateProfile({token, data})
    if (res?.data?.success === true) {
      setError(false)
      setToastVisible(true);
      setMessage(res?.data?.message)
      setTimeout(() => {
        navigation.navigate('Profile')
      }, 1000);
    } else {
      setError(true)
      setToastVisible(true);
      setMessage('Somthing went wrong!')
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'} />

      {toastVisible && (
        <Toast
          message={message}
          onAnimationComplete={handleAnimationComplete}
          backgroundColor={error === true ? 'red' : 'green'}
        />
      )}

      <Header title={'Edit Profile'} navigation={navigation}/>  
      <View style={styles.profileContainer}>
      <Image
  source={
    picture != ""
      ? selectedpic == false
        ? { uri: `https://rent-karoo.s3.ap-south-1.amazonaws.com/${picture}` }
        : {uri: picture.uri}
      : require('../../assets/profile.png')
  }
  style={styles.profilePic}
/>
         <TouchableOpacity onPress={selectDocument} activeOpacity={0.8} style={styles.cameraContainer}>
            <Entypo name='camera' size={20} color={'#000000'}/>
         </TouchableOpacity>
      </View>

      <View style={[styles.inputContainer, {marginTop: '10%'}]}>
        <TextInput mode='flat' onChangeText={setFirstName} keyboardType='name-phone-pad' value={firstName} label={'First name'} style={styles.input}/>
      </View>
      <View style={[styles.inputContainer, {marginTop: '10%'}]}>
        <TextInput mode='flat' onChangeText={setLastName} keyboardType='name-phone-pad' value={lastName} label={'Last name'} style={styles.input}/>
      </View>
      <View style={[styles.inputContainer, {marginTop: '5%'}]}>
        <TextInput mode='flat' onChangeText={setEmail} keyboardType='email-address' value={email} label={'Email'} style={styles.input}/>
      </View>
      <View style={[styles.inputContainer, {marginTop: '5%'}]}>
        <TextInput mode='flat' onChangeText={setPhoneNo} keyboardType='number-pad' value={String(phoneNo)} label={'Phone'} style={styles.input}/>
      </View>

      <View style={{marginTop: '20%'}}>
         <Button disabled={isLoading} onPress={handleSubmit} title={isLoading ? <ActivityIndicator size={'small'} color={'#FFFFFF'}/> : 'Save'} backgroundColor={'#28802c'}/>
      </View>

    </ScrollView>
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
       resizeMode: 'cover'
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