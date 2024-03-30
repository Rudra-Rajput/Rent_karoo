import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../../components/Header'

const Fav = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
       <StatusBar backgroundColor={'#18241b'}/>
       <Header title={'My Wishlist'} navigation={navigation}/>

       <View style={{flex: 1, alignSelf: 'center'}}>
       <FlatList numColumns={2} data={[1,1,1,1,1,1,1,1,1,1,1,1,1]} renderItem={() => {
        return(
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} activeOpacity={0.8} style={styles.card}>
            <Image source={{uri: 'https://cdn.motor1.com/images/mgl/Aen4V/s3/chevrolet-corvette-exterior.webp'}} style={styles.productImage}/>
            <View style={{marginTop: '3%', marginLeft: '5%'}}>
              <Text style={{color: '#000000', fontWeight: '600', fontSize: 15}}>
                ₹ 25,05,500
              </Text>
              <Text style={{color: '#000000', fontWeight: '400', fontSize: 13, opacity: 0.7}}>
                Lorem ipsum dolor sit a...
              </Text>
              <View style={{marginTop: '8%', flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name='location-outline' size={18} color={'#000000'} style={{opacity: 0.5}}/>
                <Text style={{color: '#000000', fontWeight: '400', fontSize: 12, opacity: 0.5, marginLeft: '1%'}}>
                  New Minal Residency Bh...
                </Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconContainer}>
               <AntDesign name='heart' size={15} color={'red'} style={{opacity: 0.9}}/>
            </TouchableOpacity>
          </TouchableOpacity>
        )
       }}/>
      </View>

    </View>
  )
}

export default Fav

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