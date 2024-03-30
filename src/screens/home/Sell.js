import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Header from '../../components/Header'

const Sell = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'}/>
       <Header title={'What are you offering?'} navigation={navigation}/>

       <View style={styles.categoryContainer}>

          <View style={styles.categoryItemContainer}>
             <TouchableOpacity onPress={() => navigation.navigate('SellingForm')} style={{alignItems: 'center'}} activeOpacity={0.5}>
              <FontAwesome name='car' color={'#3d4a4a'} size={40}/>
              <Text style={styles.CategoriesText}>Cars</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('SellingForm')} style={{alignItems: 'center'}} activeOpacity={0.5}>
              <FontAwesome name='building' color={'#3d4a4a'} size={40}/>
              <Text style={styles.CategoriesText}>Properties</Text>
             </TouchableOpacity>
          </View>

          <View style={[styles.categoryItemContainer, {marginTop: '25%'}]}>
             <TouchableOpacity onPress={() => navigation.navigate('SellingForm')} style={{alignItems: 'center'}} activeOpacity={0.5}>
              <MaterialCommunityIcons name='motorbike' color={'#3d4a4a'} size={40}/>
              <Text style={styles.CategoriesText}>Cars</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('SellingForm')} style={{alignItems: 'center'}} activeOpacity={0.5}>
              <MaterialCommunityIcons name='cellphone' color={'#3d4a4a'} size={40}/>
              <Text style={styles.CategoriesText}>Mobiles</Text>
             </TouchableOpacity>
          </View>

          <View style={[styles.categoryItemContainer, {marginTop: '25%'}]}>
             <TouchableOpacity onPress={() => navigation.navigate('SellingForm')} style={{alignItems: 'center'}} activeOpacity={0.5}>
              <MaterialIcons name='chair' color={'#3d4a4a'} size={40}/>
              <Text style={styles.CategoriesText}>Furniture</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('SellingForm')} style={{alignItems: 'center'}} activeOpacity={0.5}>
              <Ionicons name='shirt' color={'#3d4a4a'} size={40}/>
              <Text style={styles.CategoriesText}>Fashion</Text>
             </TouchableOpacity>
          </View>

       </View>

    </View>
  )
}

export default Sell

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  categoryContainer: {
    marginTop: '10%',
    marginHorizontal: '17%'
  },
  categoryItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  CategoriesText: {
    color: '#3d4a4a',
    fontWeight: '600',
    letterSpacing: .5,
    fontSize: 15,
    marginTop: '5%'
  }
})