import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../../components/Header'
import { useGetShopProductByShopIdQuery } from '../../redux/services/Profile'

const ShopProduct = ({navigation, route}) => {

  const shopId = route.params?.id
  const {data, isLoading} = useGetShopProductByShopIdQuery(shopId);

  return (
    <>
    { isLoading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <ActivityIndicator size={'large'} color={'blue'}/>
    </View> :
    <View style={styles.mainContainer}>

    <View style={{position: 'relative', width: '100%'}}>
      <Header title={'Products'} navigation={navigation} />
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('AddProduct', {shopId})} style={{position:"absolute", right:20, top:14}} >
       <Entypo name="squared-plus" size={35} color={'#520a21'} />
      </TouchableOpacity>
    </View>

      { data?.data?.length === 0 ? 
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '40%'}}>
        <Image
        source={require('../../assets/notfound.png')}
        style={{width: 280, height: 280}}
        />
      </View> :
      <View style={{flex: 1}}>
       <FlatList numColumns={2} data={data?.data} renderItem={({item}) => {
        return(
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {item})} activeOpacity={0.8} style={styles.card}>
            <Image source={{uri: `https://rent-karoo.s3.ap-south-1.amazonaws.com/${item?.photos[0]}`}} style={styles.productImage}/>
            <View style={{marginTop: '3%', marginLeft: '5%'}}>
              <Text style={{color: '#000000', fontWeight: '600', fontSize: 15}}>
                ₹ {item?.price}
              </Text>
              <Text style={{color: '#000000', fontWeight: '400', fontSize: 13, opacity: 0.7}}>
                {item?.name}
              </Text>
              <View style={{marginTop: '8%', flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name='location-outline' size={18} color={'#000000'} style={{opacity: 0.5}}/>
                <Text style={{color: '#000000', fontWeight: '400', fontSize: 12, opacity: 0.5, marginLeft: '1%'}}>
                  {`${item?.fullAddress?.area} ${item?.fullAddress?.city} (${item?.fullAddress?.pincode})`}
                </Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconContainer}>
               <AntDesign name='hearto' size={15} color={'#000000'} style={{opacity: 0.9}}/>
            </TouchableOpacity>
          </TouchableOpacity>
        )
       }}/>
      </View>
      }

    </View>
    }
    </> 
  )
}

export default ShopProduct

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  card: {
    width: '46%', 
    borderWidth: 2,
    borderColor: '#dcdedc',
    borderRadius: 5,
    margin: '2%',
    paddingVertical: 15,
    marginTop: '5%'
  },
  productImage: {
    width: 145,
    height: 130,
    borderRadius: 5,
    alignSelf: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 15,
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: '#f2f5f2',
    justifyContent: 'center',
    alignItems: 'center',
  }
})