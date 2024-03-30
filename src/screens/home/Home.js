import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Home = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'}/>
      {/* TODO: Header */}
       <View style={styles.headerContainer}>
         <View>
            <Image source={{uri: 'https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png'}} style={styles.headerImage}/>
         </View>
         <TouchableOpacity onPress={() => navigation.navigate('Location')} activeOpacity={0.4} style={{flexDirection: 'row', alignItems: 'center', width: '38%', justifyContent: 'space-between'}}>
            <Ionicons name='location-outline' size={24} color={'#000000'}/>
            <Text style={styles.locationText}>Indrapuri c sect...</Text>
         </TouchableOpacity>
       </View>
   
      {/* TODO: Search Bar */}
       <View style={styles.searchBarContainer}>
         <View style={styles.inputContainer}>
            <TextInput placeholder='Find Cars, Mobile Phones and More...' style={styles.inputStyle} />
         </View>
         <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
           <Ionicons name='notifications-circle-outline' size={30} color={"#000000"} style={{marginRight: '3%'}}/>
         </TouchableOpacity>
       </View>

       {/* <TouchableOpacity onPress={() => navigation.navigate('Services')} activeOpacity={0.7} style={styles.serviceButton}>
          <Image source={require('../../assets/service.png')} style={{width: 50, height: 50, borderRadius: 50, resizeMode: 'contain', tintColor: '#165c4a'}}/>
          <Text style={styles.serviceText}>Services</Text>
       </TouchableOpacity> */}

      {/* TODO: Categories */}
       <View style={styles.categoryContainer}>
         <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: '3%'}}>
            <Text onPress={() => navigation.navigate('AllCategory')} style={styles.categoryText}>Browse categories</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllCategory')}>
            <Text style={styles.categoryText}>See all</Text>
            </TouchableOpacity>
         </View>
         <View style={{marginHorizontal: '3%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
           <TouchableOpacity onPress={() =>navigation.navigate('Product')} activeOpacity={0.5} style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome5 name='car-side' color={'#164694'} size={25}/>
              <Text style={styles.iconText}>CARS</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() =>navigation.navigate('Product')} activeOpacity={0.5} style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome name='building' color={'#aeb324'} size={25}/>
              <Text style={styles.iconText}>PROPERTIES</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() =>navigation.navigate('Product')} activeOpacity={0.5} style={{alignItems: 'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons name='cellphone' color={'#2ca6a8'} size={25}/>
              <Text style={styles.iconText}>MOBILES</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() =>navigation.navigate('Product')} activeOpacity={0.5} style={{alignItems: 'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons name='motorbike' color={'#3d4a4a'} size={25}/>
              <Text style={styles.iconText}>BIKES</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() =>navigation.navigate('Product')} activeOpacity={0.5} style={{alignItems: 'center', justifyContent: 'center'}}>
              <MaterialIcons name='chair' color={'#873822'} size={25}/>
              <Text style={styles.iconText}>FURNITURE</Text>
           </TouchableOpacity>
         </View>
       </View>

      {/* TODO: Recommendate Product */}
       <View style={styles.horizontalLine}></View>

       <View style={{marginHorizontal: '2%', marginTop: '3%'}}>
         <Text style={{fontSize: 16, fontWeight: '500', color: '#000000', letterSpacing: 1}}>Fresh recommendations</Text>
       </View>

       <View style={{flex: 1, alignSelf: 'center'}}>
       <FlatList scrollEnabled={false} numColumns={2} data={[1,1,1,1,1,1,1,1,1,1,1,1,1]} renderItem={() => {
        return(
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} activeOpacity={0.8} style={styles.card}>
            <Image source={{uri: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg'}} style={styles.productImage}/>
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
              <AntDesign name='hearto' size={15} color={'#000000'} style={{opacity: 0.9}}/>
            </TouchableOpacity>

          </TouchableOpacity>
        )
       }}/>
      </View>

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2%'
  },
  headerImage: {
    width: 35,
    height:35,
    resizeMode: 'contain'
  },
  locationText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600'
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginTop: '3%',
    paddingVertical: 6,
    backgroundColor: '#e6ebf2'
  },
  inputContainer: {
    width: '85%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  inputStyle: {
    marginLeft: '2%',
    color: '#000000'
  },
  categoryContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    elevation: 3,
    paddingVertical: 20
  },
  categoryText: {
    fontSize: 15, 
    color: '#000000',
    fontWeight: '500',
    textDecorationLine: 'underline'
  },
  iconText: {
    letterSpacing: .5,
    color: '#000000',
    opacity: 0.6,
    fontSize: 13,
    fontWeight: '600',
    marginTop: '15%'
  },
  horizontalLine: {
    width: '100%',
    height: 6,
    backgroundColor: '#e6ebf2'
  },
  card: {
    width: '46%', 
    borderWidth: 2,
    borderColor: '#dcdedc',
    borderRadius: 5,
    margin: '2%',
    paddingVertical: 15
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
  },
  serviceButton: {
    marginVertical: '3%',
    marginLeft: '3%',
  },
  serviceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: .5,
  }
})