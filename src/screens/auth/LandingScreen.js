import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
        <StatusBar backgroundColor={'#18241b'}/>
       <View style={styles.section1}>
          <View>
            <Image source={{uri: 'https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png'}} style={styles.logo}/>
          </View>
       </View>
       <View style={styles.section2}>
          <TouchableOpacity onPress={() => navigation.navigate('Phone')} activeOpacity={0.8} style={styles.phoneContainer}>
            <Feather name='smartphone' size={25} color={'#000000'} style={{marginLeft: '3%'}}/>
             <Text style={styles.phoneText}>Continue with Phone</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#FFFFFF', textAlign: 'center', marginTop: '3%'}}>OR</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Email')} activeOpacity={0.8} style={{alignSelf: 'center', marginTop: '2%'}}>
            <Text style={styles.emailText}>Login with Email</Text>
          </TouchableOpacity>
          <View style={styles.privacyTextContainer}>
             <Text style={styles.privacyText}>if you continue, you are accepting</Text>
             <Text style={[styles.privacyText, {textDecorationLine: 'underline'}]}>OLX Terms and Conditions and Privacy Policy</Text>
          </View>
       </View>
    </View>
  )
}

export default LandingScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    section1: {
        height: '60%',
        width: '100%',
        backgroundColor: '#f2f7f4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    section2: {
        height: '40%',
        width: '100%',
        backgroundColor: '#18241b'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 150,
        resizeMode: 'contain'
    },
    phoneContainer: {
        width: '85%',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        height: 48,
        alignSelf: 'center',
        marginTop: '20%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    phoneText: {
        fontSize: 15,
        color: '#000000',
        fontWeight: '500',
        marginLeft: '4%',
        letterSpacing: .5
    },
    emailText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFFFFF',
        letterSpacing: .5,
        textDecorationLine: 'underline',
    },
    privacyTextContainer: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center'
    },
    privacyText: {
        textAlign: 'center',
        color: '#FFFFFF',
        letterSpacing: .5,
        fontWeight: '700',
        fontSize: 13
    }
})