import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const Profile = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'}/>
      
      <Header navigation={navigation} title={'Profile'} />

       <View style={styles.profileContainer}>
          <Image source={{uri: 'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw'}} style={styles.profilePic}/>
          <Text style={styles.profileText}>Rudra Pratap Singh</Text>
       </View>

       <View style={{marginTop: '25%'}}>
         <TouchableOpacity onPress={()=>navigation.navigate('ProfileView')} activeOpacity={0.8} style={styles.section}>
           <Text style={styles.sectionText}>View and Edit Profile</Text>
         </TouchableOpacity>
         <TouchableOpacity activeOpacity={0.8} style={[styles.section, {marginTop: '3%'}]}>
           <Text style={styles.sectionText}>Settings</Text>
         </TouchableOpacity>
         <TouchableOpacity activeOpacity={0.8} style={[styles.section, {marginTop: '3%'}]}>
           <Text style={styles.sectionText}>Help & Support</Text>
         </TouchableOpacity>
         <TouchableOpacity activeOpacity={0.8} style={[styles.section, {marginTop: '3%'}]}>
           <Text style={styles.sectionText}>Log Out</Text>
         </TouchableOpacity>
       </View>

    </View>
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
    fontWeight: '500'
  },
  section: {
    width: '92%',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: .5
  },
  sectionText: {
    marginLeft: '5%',
    letterSpacing: .5,
    color: '#000000',
    fontWeight: '600',
    fontSize: 15
  }
})