import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useState } from 'react'
import { TextInput } from 'react-native-paper'
import Button from '../../components/Button'

const Location = ({navigation}) => {

   const [hide, setHide] = useState(false);
 
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
        <StatusBar backgroundColor={'#18241b'}/>
        <Header title={'Location'} navigation={navigation}/>

        <TouchableOpacity activeOpacity={0.7} style={styles.locationButtonContainer}>
           <FontAwesome6 name='location-crosshairs' size={25} color={'blue'} style={{opacity: 0.7}}/>
           <Text style={styles.locationText}>Use current location</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>setHide(!hide)} activeOpacity={0.7} style={styles.locationButtonContainer}>
           <FontAwesome6 name='location-dot' size={25} color={'#000000'} style={{opacity: 0.7}}/>
           <Text style={[styles.locationText, {color: '#000000'}]}>Use location manually</Text>
        </TouchableOpacity>

        { hide === true ? 
        <>
          <View style={[styles.inputContainer, {marginTop: '10%'}]}>
            <TextInput mode='flat' label={'Flat no *'} style={styles.input}/>
          </View>
          <View style={[styles.inputContainer, {marginTop: '5%'}]}>
            <TextInput mode='flat' label={'Landmark *'} style={styles.input}/>
          </View>
          <View style={[styles.inputContainer, {marginTop: '5%'}]}>
            <TextInput mode='flat' label={'City *'} style={styles.input}/>
          </View>
          <View style={[styles.inputContainer, {marginTop: '5%'}]}>
            <TextInput mode='flat' maxLength={6} keyboardType='number-pad' label={'Pin code *'} style={styles.input}/>
          </View>
   
          <View style={{marginTop: '10%'}}>
             <Button title={'Submit'} backgroundColor={'#293791'} />
          </View>

        </>
         : null
        }

    </ScrollView>
  )
}

export default Location

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    locationButtonContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       marginTop: '5%',
       width: '90%',
       alignSelf: 'center',
       borderWidth: 1,
       justifyContent: 'center',
       paddingVertical: 10,
       borderRadius: 5,
       borderColor: '#dbdbdb'
    },
    locationText: {
        marginLeft: '5%',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: .5,
        color: 'blue'
    },
    inputContainer: {
        width: '85%',
        alignSelf: 'center'
    },
    input: {
        backgroundColor: '#FFFFFF',
        color: '#000000'
    },
})