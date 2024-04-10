import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {useVerifyOtpMutation} from '../../redux/services/Profile';
import {storeToken, storeUser} from '../../redux/services/LocalStorage';
import Toast from '../../components/Toast';

const Otp = ({navigation, route}) => {

  const [toastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState('');
  console.log(message, 'message')

  const handleAnimationComplete = () => {
    setToastVisible(false);
  };

  const {res, email, phoneNo} = route.params;
  const parsedRes = JSON.parse(res);
  const otp = parsedRes?.data?.otp;

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const enteredOtp = Number(pin1 + pin2 + pin3 + pin4);

  const [verifyOtp, {isLoading}] = useVerifyOtpMutation();

  const handleSubmit = async () => {
    const data = email ? {email, otp} : {phoneNo, otp};
    if (otp === enteredOtp) {
      const res = await verifyOtp(data);
      if (res?.data?.token) {
        setPin1('')
        setPin2('')
        setPin3('')
        setPin4('')
        const token = res?.data?.token;
        const userId = res?.data?.user?._id;
        storeToken(token);
        storeUser(userId);
        navigation.navigate('Main');
      } else {
        setMessage(res?.error?.data?.error)
        setToastVisible(true);
      }
    } else {
      setToastVisible(true);
      setMessage('Wrong OTP! please check OTP and login')
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'} />

      {toastVisible && (
        <Toast
          message={message}
          onAnimationComplete={handleAnimationComplete}
          backgroundColor={'red'}
        />
      )}

      <Header title={'Login with OTP'} navigation={navigation} />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={styles.image}
        />
      </View>

      <Text style={styles.heading}>Enter OTP to login</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '10%',
          width: '100%',
          alignSelf: 'center',
        }}>
        <TextInput
          ref={pin1Ref}
          mode="outlined"
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={text => {
            setPin1(text);
            if (text === '') {
              // If text is empty, move focus to the previous input
              pin4Ref.current.focus();
            } else {
              pin2Ref.current.focus();
            }
          }}
        />

        <TextInput
          ref={pin2Ref}
          mode="outlined"
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={text => {
            setPin2(text);
            if (text === '') {
              pin1Ref.current.focus();
            } else {
              pin3Ref.current.focus();
            }
          }}
        />

        <TextInput
          ref={pin3Ref}
          mode="outlined"
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={text => {
            setPin3(text);
            if (text === '') {
              pin2Ref.current.focus();
            } else {
              pin4Ref.current.focus();
            }
          }}
        />

        <TextInput
          ref={pin4Ref}
          mode="outlined"
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={text => {
            setPin4(text);
            if (text === '') {
              pin3Ref.current.focus();
            } else {
              pin1Ref.current.focus();
            }
          }}
        />
      </View>

      <View style={{position: 'absolute', bottom: 10, width: '100%'}}>
        <Button
          onPress={handleSubmit}
          title={
            isLoading ? (
              <ActivityIndicator size={'small'} color={'#FFFFFF'} />
            ) : (
              'Login'
            )
          }
          backgroundColor={'#1631b8'}
        />
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginTop: '10%',
    marginLeft: '5%',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
    resizeMode: 'cover',
  },
  heading: {
    marginLeft: '5%',
    marginTop: '10%',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.5,
    color: '#000000',
  },

  input: {
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    color: '#000000',
    borderWidth: 1,
    width: 50,
    textAlign: 'center',
    borderColor: '#ababa7',
  },
  inputText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 13,
    letterSpacing: 0.5,
  },
});
