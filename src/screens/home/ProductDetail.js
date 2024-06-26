import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Slider from '../../components/Slider'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { useSelector } from 'react-redux'
import { useGenarateEnquiryMutation } from '../../redux/services/Profile';

const ProductDetail = ({navigation, route}) => {

  const data = route.params?.item;
  const { user } = useSelector(state => state.user);

  const [genarateEnquiry, { isLoading }] = useGenarateEnquiryMutation();

  const handleEnquiry = async () => {
    const data = {product: data?._id, senderID:user}
    const res = await genarateEnquiry(data);
    console.log(res, 'response')
  }

  return (
    <>
    <ScrollView showsVerticalScrollIndicator = {false} style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar backgroundColor={'#18241b'}/>
      
       <Header title={'Product Details'} navigation={navigation} />
       <Slider photos={data?.photos}/>

      <View style={styles.priceContainer}>
         <Text style={styles.priceText}>₹ {data?.price}</Text>
         <TouchableOpacity activeOpacity={0.6}>
           <AntDesign name='hearto' size={23} color={'#000000'}/>
         </TouchableOpacity>
      </View>

      <View style={{marginLeft: '4%', marginTop: '2%'}}>
         <Text style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>{data?.name}</Text>
         <Text style={[styles.description]}>
            {data?.subtitle}
          </Text>
         <Text style={{fontSize: 13, fontWeight: '500', color: '#000000', marginTop: '1%'}}>+91 {data?.user?.phoneNo}</Text>
      </View>
         
      <View style={styles.locationContainer}>
         <View style={{flexDirection: 'row'}}>
            <Entypo name='location-pin' size={20} color={'#000000'}/>
            <Text style={{marginLeft: '2%', color: '#000000', fontWeight: '400', fontSize: 14}}>{`${data?.fullAddress?.area} ${data?.fullAddress?.city} (${data?.fullAddress?.pincode})`}</Text>
         </View>
         {/* <Text style={{fontSize: 15, fontWeight: '600', color: '#000000', letterSpacing: .5}}>TODAY</Text> */}
      </View>

      <View style={styles.horizontalLine}></View>

      <View style={styles.detailsContainer}>
          <Text style={styles.heading}>
             Description
          </Text>
          <Text style={[styles.description, {marginTop: '5%'}]}>
            {data?.description}
          </Text>
      </View>
    </ScrollView>

    <View style={styles.buttonContainer}>
      <Button disabled={isLoading} onPress={handleEnquiry} title={isLoading ? <ActivityIndicator size={'small'} color={'#FFFFFF'}/> : 'Enquiry Now'} backgroundColor={'#196915'}/>
    </View>

    </>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '4%',
        marginTop: '3%'
    },
    priceText: {
        fontSize: 16,
        color: '#000000',
        letterSpacing: .5,
        fontWeight: '700'
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '3%',
        marginTop: '2%'
    },
    horizontalLine: {
        width: '100%',
        height: 2,
        backgroundColor: '#000000',
        opacity: 0.2,
        marginTop: '2%'
    },
    detailsContainer: {
        marginLeft: '4%',
        marginTop: '5%'
    },
    heading: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000'
    },
    description: {
        color: '#000000',
        marginTop: '1%',
        fontSize: 14,
        fontWeight: '400'
    },
    buttonContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
})