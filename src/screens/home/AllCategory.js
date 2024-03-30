import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const AllCategory = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
        <Header title={'Categories'} navigation={navigation}/>

        <View style={styles.CategoriesContainer}>

           <TouchableOpacity onPress={() => navigation.navigate('Product')} activeOpacity={0.6} style={styles.itemContainer}>
            <FontAwesome name='car' color={'#164694'} size={30}/>
            <Text style={styles.CategoriesText}>Cars</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Product')} activeOpacity={0.6} style={[styles.itemContainer, {marginTop: '10%'}]}>
            <FontAwesome name='building' color={'#aeb324'} size={30}/>
            <Text style={styles.CategoriesText}>Properties</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Product')} activeOpacity={0.6} style={[styles.itemContainer, {marginTop: '10%'}]}>
            <MaterialCommunityIcons name='cellphone' color={'#2ca6a8'} size={30}/>
            <Text style={styles.CategoriesText}>Mobiles</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Product')} activeOpacity={0.6} style={[styles.itemContainer, {marginTop: '10%'}]}>
            <MaterialCommunityIcons name='motorbike' color={'#3d4a4a'} size={30}/>
            <Text style={styles.CategoriesText}>Bikes</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Product')} activeOpacity={0.6} style={[styles.itemContainer, {marginTop: '10%'}]}>
            <MaterialIcons name='chair' color={'#873822'} size={30}/>
            <Text style={styles.CategoriesText}>Furniture</Text>
           </TouchableOpacity>

        </View>

    </View>
  )
}

export default AllCategory

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFFFF'
    },
    CategoriesContainer: {
        marginTop: '5%',
        marginHorizontal: '3%'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    CategoriesText: {
        marginLeft: '5%',
        color: '#000000',
        fontSize: 15,
        letterSpacing: .5,
        fontWeight: '600'
    },
    horizontalLine: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#000000',
        marginTop: '3%',
        opacity: 0.3
    }
})