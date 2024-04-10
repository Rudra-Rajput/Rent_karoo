import { Image, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Header from '../../components/Header'
import Button from '../../components/Button'

const ProfileView = ({navigation, route}) => {

  const {data} = route.params
  console.log(data, 'data')

  const date = new Date(data?.data?.createdAt);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const formattedDate = `${month} ${year}`;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'}/>

      <Header title={'View and Edit Profile'} navigation={navigation}/>

      <View style={styles.profileDetailsContainer}>
         <View style={styles.profilepicContainer}>
            <Image source={data?.data?.picture !== "" ? {uri: `https://rent-karoo.s3.ap-south-1.amazonaws.com/${data?.data?.picture}`} : require('../../assets/profile.png')} style={styles.profilePic}/>
            <Text style={styles.profileText}>{data?.data?.firstName ? `${data?.data?.firstName} ${data?.data?.lastName}` : 'User'}</Text>
         </View>
         <View style={{marginTop: '5%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name='calendar' size={20} color={'#000000'} style={{opacity: 0.5}}/>
            <Text style={{marginLeft: '5%', fontWeight: '500', color: '#000000', opacity: 0.5, fontSize: 14}}>Member since {formattedDate}</Text>
         </View>
         {data?.data?.email ? <View style={{marginTop: '3%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name='email' size={20} color={'#000000'} style={{opacity: 0.5}}/>
            <Text style={{marginLeft: '5%', fontWeight: '500', color: '#000000', opacity: 0.5, fontSize: 14}}>{data?.data?.email}</Text>
         </View> : null}
         {data?.data?.phoneNo ? <View style={{marginTop: '3%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center'}}>
            <Feather name='headphones' size={20} color={'#000000'} style={{opacity: 0.5}}/>
            <Text style={{marginLeft: '5%', fontWeight: '500', color: '#000000', opacity: 0.5, fontSize: 14}}>+91 | {data?.data?.phoneNo}</Text>
         </View> : null}
         <View style={{marginTop: '10%'}}>
           <Button onPress={() => navigation.navigate('Edit', {data})} title={'Edit Profile'} backgroundColor={'#28802c'}/>
         </View>
      </View>

        <View style={styles.horizontalLine}></View>

      <View style={styles.sellingContainer}>
         <View>
            <Image source={{uri: 'https://cdn-icons-png.freepik.com/512/4838/4838786.png'}} style={styles.sellImage}/>
         </View>
         <View>
           <Text style={styles.heading}>You haven't listed anythings yet</Text>
           <Text style={styles.text}>Let go of what you don't use anymore</Text>
         </View>
         <TouchableOpacity onPress={() => navigation.navigate('Sell')} activeOpacity={0.5} style={styles.btnContainer}>
            <Text style={styles.btnText}>Start Selling</Text>
         </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default ProfileView

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  profileDetailsContainer: {
    marginHorizontal: '4%',
    marginTop: '8%'
  },
  profilepicContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 70
  },
  profileText: {
    fontSize: 19,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: .5,
    marginLeft: '6%',
    opacity: 0.7,
    textDecorationLine: 'underline',
    textDecorationStyle: 'double'
  },
  sellingContainer: {
    marginTop: '-5%',
    alignItems: 'center',
  },
  horizontalLine: {
    width: '100%',
    height: 8,
    backgroundColor: '#f2f7f3',
    marginVertical: '10%'
  },
  sellImage: {
    width: 100,
    height: 150,
    borderRadius: 120,
    resizeMode: 'contain'
  },
  heading: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#000000',
    fontSize: 17
  },
  text: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '400',
    marginTop: '1%',
    textAlign: 'center'
  },
  btnContainer: {
    width: '30%',
    height: 30,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%'
  },
  btnText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 14
  }
})