import { StyleSheet, Alert, Text, View, TouchableOpacity, Image, StatusBar, ActivityIndicator } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {useGetUserProfileQuery} from '../../redux/services/Profile'
import {useSelector} from 'react-redux';
import { removeToken } from '../../redux/services/LocalStorage';
import { StackActions } from '@react-navigation/native';
import { unsetUserToken } from '../../redux/Slices/authSlice'

const Profile = ({navigation}) => {

  const {token} = useSelector(state => state.auth);

  const {data, isLoading} = useGetUserProfileQuery(token);

  const handleLogOut = async() => {
    unsetUserToken({token: null});
    await removeToken('token');
    navigation.dispatch(StackActions.replace('Landing'));
  }

  const logOut = () => {
    Alert.alert(
      'Alert',
      'Are you sure you want to Log out !',
      [
        {
          text: 'Yes',
          onPress: () => {
            handleLogOut();
          },
        },
        {
          text: 'Cancel',
          onPress: () => {},
        },
      ],
    );
  }

  return (
   <>
    { isLoading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} color={'blue'}/>
    </View> :
      <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'}/>
      
      <Header navigation={navigation} title={'Profile'} />

       <View style={styles.profileContainer}>
          <Image source={data?.data?.picture !== "" ? {uri: `https://rent-karoo.s3.ap-south-1.amazonaws.com/${data?.data?.picture}`} : require('../../assets/profile.png')} style={styles.profilePic}/>
          <Text style={styles.profileText}>{data?.data?.firstName ? `${data?.data?.firstName} ${data?.data?.lastName}` : 'User'}</Text>
       </View>

       <View style={{marginTop: '25%'}}>
         <TouchableOpacity onPress={()=>navigation.navigate('ProfileView', {data})} activeOpacity={0.8} style={styles.section}>
           <Text style={styles.sectionText}>View and Edit Profile</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('Setting')} activeOpacity={0.8} style={[styles.section, {marginTop: '3%'}]}>
           <Text style={styles.sectionText}>Settings</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('HelpSupport')} activeOpacity={0.8} style={[styles.section, {marginTop: '3%'}]}>
           <Text style={styles.sectionText}>Help & Support</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={logOut} activeOpacity={0.8} style={[styles.section, {marginTop: '3%'}]}>
           <Text style={styles.sectionText}>Log Out</Text>
         </TouchableOpacity>
       </View>

    </View>}
    </>

  )
}

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  profileContainer: {
    width: 180,
    height: 180,
    borderRadius: 180,
    marginTop: '5%',
    alignSelf: 'center'
  },
  profilePic: {
    width: 180,
    height: 180,
    borderRadius: 180,
    resizeMode: 'contain'
  },
  profileText: {
    textAlign: 'center',
    marginTop: '8%',
    letterSpacing: 1,
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    textDecorationStyle: 'double',
    textDecorationLine: 'underline'
  },
  section: {
    width: '92%',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 1
  },
  sectionText: {
    marginLeft: '5%',
    letterSpacing: .5,
    color: '#000000',
    fontWeight: '600',
    fontSize: 15
  }
})