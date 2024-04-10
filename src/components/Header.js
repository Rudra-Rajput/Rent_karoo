import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Header = ({navigation, title}) => {
  return (
    <View style={styles.headerContainer}>
         <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.5}>
            <MaterialIcons name='arrow-back-ios' size={23} color={'#000000'} style={{opacity: 0.7}}/>
         </TouchableOpacity>
         <View style={{marginLeft: '15%'}}>
            <Text style={styles.headerText}>{title}</Text>
         </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        padding: '5%',
        alignItems: 'center',
        // backgroundColor: '#ededed',
        backgroundColor: '#FFFFFF',
        elevation: 2
      },
      headerText: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1
      },
})