import { Image, StyleSheet, Text, TextInput, View, StatusBar, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { useUserSendOtpMutation } from '../../redux/services/Profile';
import Toast from '../../components/Toast';

const Phone = ({navigation}) => {

  const [toastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleAnimationComplete = () => {
    setToastVisible(false);
  };

  const [sendOtp, {isLoading}] = useUserSendOtpMutation();

  const [phoneNo, setPhoneNo] = useState(null);

  const handleSubmit = async () => {
     const data = {phoneNo}
     const res = await sendOtp(data)
     if (res?.data?.success === true) {
        setToastVisible(true);
        setMessage(res?.data?.message)
        setTimeout(() => {
          navigation.navigate('Otp', { res: JSON.stringify(res), phoneNo });
        }, 1000);
     }
  }

  return (
    <View style={styles.mainContainer}>
        <StatusBar backgroundColor={'#18241b'}/>

        {toastVisible && (
        <Toast
          message={message}
          onAnimationComplete={handleAnimationComplete}
          backgroundColor={'green'}
        />
      )}

       <Header title={'Login with Phone'} navigation={navigation} />

     <View style={styles.imageContainer}>
        <Image source={{uri: 'https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'}} style={styles.image}/>
     </View>

     <Text style={styles.heading}>Enter your phone to login</Text>

     <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Phone</Text>
        <TextInput maxLength={10} onChangeText={(txt) => setPhoneNo(txt)} placeholder='Phone' keyboardType='number-pad' style={styles.inputStyle}/>
     </View>

     <View style={{position: 'absolute', bottom: 10, width: '100%'}}>
        <Button disabled={!phoneNo} onPress={handleSubmit} title={isLoading ? <ActivityIndicator size={'small'} color={'#FFFFFF'}/> : 'Login'} backgroundColor={!phoneNo ? 'grey':'#1631b8'}/>
     </View>

    </View>
  )
}

export default Phone

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 80,
        marginTop: '10%',
        marginLeft: '5%'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80,
        resizeMode: 'cover'
    },
    heading: {
        marginLeft: '5%',
        marginTop: '10%',
        fontWeight: '700',
        fontSize: 18,
        letterSpacing: .5,
        color: '#000000'
    },
    inputContainer: {
        marginTop: '8%',
        marginLeft: '5%'
    },
    inputStyle: {
        backgroundColor: '#f7f7f7',
        borderRadius: 5,
        width: '95%',
        color: '#000000'
    },
    inputText: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 13,
        letterSpacing: .5
    }
})