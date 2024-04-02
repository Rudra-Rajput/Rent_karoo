import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-paper'
import Button from '../../components/Button'

const Location = ({navigation}) => {

   const [hide, setHide] = useState(false);
   const [isFocus, setIsFocus] = React.useState(false);
   const [isFocus1, setIsFocus1] = React.useState(false);
   const [state, setState] = React.useState('');
   const [city, setCity] = React.useState('');

    const stateData = [
        { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { label: 'Utter Pradesh', value: 'Utter Pradesh' },
        { label: 'Himanchal Pradesh', value: 'Himanchal Pradesh' },
      ];

    const cityData = [
        { label: 'Bhopal', value: 'Bhopal' },
        { label: 'Damoh', value: 'Damoh' },
        { label: 'Hoshangabad', value: 'Hoshangabad' },
        { label: 'Balaghat', value: 'Balaghat' },
        { label: 'Betul', value: 'Betul' },
      ];
 
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
          
          <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              data={stateData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              itemTextStyle={styles.itemTextStyle}
              selectedTextStyle={styles.itemTextStyle}
              placeholderTextStyle={styles.placeholderStyle}
              placeholder={!isFocus ? 'Select City' : '...'}
              value={state}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={async (item) => {
                setState(item.value);
                setIsFocus(false);
              }}
            />

          <Dropdown
              style={[styles.dropdown, isFocus1 && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              data={cityData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              itemTextStyle={styles.itemTextStyle}
              selectedTextStyle={styles.itemTextStyle}
              placeholderTextStyle={styles.placeholderStyle}
              placeholder={!isFocus1 ? 'Select State' : '...'}
              value={city}
              onFocus={() => setIsFocus1(true)}
              onBlur={() => setIsFocus1(false)}
              onChange={async (item) => {
                setCity(item.value);
                setIsFocus1(false);
              }}
            />

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
    itemTextStyle: {
      color: '#000000'
  },
  placeholderStyle: {
      color: '#000000',
      fontSize: 15
  },
  dropdown: {
      margin: 15,
      height: 50,
      paddingLeft: '7%',
      borderBottomColor: '#b0b0b0',
      borderBottomWidth: 1,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      width: '90%',
      alignSelf: 'center',
      paddingVertical: 30,
      paddingHorizontal: 10,
      color: '#000000',
      opacity: 0.8
    },
})