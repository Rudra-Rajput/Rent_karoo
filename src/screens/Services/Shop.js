import { Linking, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../../components/Header'
import Slider from '../../components/Slider'

const Shop = ({navigation, route}) => {

  const data = route.params?.item

  const date = new Date(data?.createdAt);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const formattedDate = `${month} ${year}`;

  const message = 'Hello there!';
  const encodedMessage = encodeURIComponent(message);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'}/>

      <Header title={'Service Details'} navigation={navigation}/>

        <Slider photos={data?.photos}/>

      <View style={styles.profileDetailsContainer}>
        <Text style={styles.profileText}>{data?.name}</Text>
         <View style={{marginTop: '5%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name='calendar' size={20} color={'#000000'} style={{opacity: 0.7}}/>
            <Text style={{marginLeft: '5%', fontWeight: '500', color: '#000000', opacity: 0.7, fontSize: 14}}>Member since {formattedDate}</Text>
         </View>
         <View style={{marginTop: '3%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name='email' size={20} color={'#000000'} style={{opacity: 0.7}}/>
            <Text style={{marginLeft: '5%', fontWeight: '500', color: '#000000', opacity: 0.7, fontSize: 14}}>{data?.email}</Text>
         </View>
         <View style={{marginTop: '3%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center'}}>
            <Feather name='headphones' size={20} color={'#000000'} style={{opacity: 0.7}}/>
            <Text style={{marginLeft: '5%', fontWeight: '500', color: '#000000', opacity: 0.7, fontSize: 14}}>+91 | {data?.phoneNo}</Text>
         </View>
      </View>

      <View style={{marginTop: '3%', marginHorizontal: '6%', flexDirection: 'row', alignItems: 'center'}}>
         <Text style={[styles.heading, {alignSelf: 'flex-start'}]}>Specialization -</Text>
         <Text style={{fontSize: 15, color: '#000000', fontWeight: '500', marginLeft: '5%'}}>{data?.subtitle}</Text> 
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => Linking.openURL(`tel: ${data?.phoneNo}`)} activeOpacity={0.5}>
         <Feather name='phone-call' size={28} color={'#165c4a'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`sms:${data?.phoneNo}`)} activeOpacity={0.5}>
         <AntDesign name='message1' size={28} color={'#165c4a'}/>
        </TouchableOpacity>
      </View>

      <View style={{marginLeft: '5%', marginTop: '5%'}}>
         <Text style={[styles.heading, {alignSelf: 'flex-start'}]}>Service Address -</Text>
         <Text style={styles.address}>{`${data?.fullAddress?.area} ${data?.fullAddress?.city} (${data?.fullAddress?.pincode})`}</Text>
      </View>

      <View style={styles.horizontalLine}></View>

      <View style={{marginLeft: '5%', marginTop: '-5%'}}>

        <Text style={[styles.heading, {alignSelf: 'flex-start', textDecorationLine: 'underline'}]}>Description</Text>
         <View style={{marginTop: '0%'}}>
          <Text style={styles.serviceText}>{data?.description}</Text>
        </View>

         <Text style={[styles.heading, {alignSelf: 'flex-start', textDecorationLine: 'underline', marginTop: '10%'}]}>List of services</Text>
         <View style={{marginTop: '0%'}}>
            <Text style={styles.serviceText}>1. {data?.name}</Text>
            <Text style={styles.serviceText}>2. {data?.subtitle}</Text>
         </View>
      </View>

    </ScrollView>
  )
}

export default Shop

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
    marginLeft: '2%',
    opacity: 0.7
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
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    width: '25%',
    marginTop: '5%',
    justifyContent: 'space-between'
  },
  address: {
    marginTop: '2%',
    fontWeight: '500',
    fontSize: 15,
    color: '#000000',
    opacity: 0.7,
    width: '98%',
    letterSpacing: 1
  },
  serviceText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#293791',
    marginTop: '4%',
    marginRight: '2%'
  }
})