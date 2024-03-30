import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../../components/Header'
import Entypo from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native-paper'
import Button from '../../components/Button'

const SellingForm = ({navigation}) => {
    
    const [isFocus, setIsFocus] = React.useState(false);
    const [type, setType] = React.useState('');

    const data = [
        { label: 'Aadhar', value: 'Aadhar' },
        { label: 'RC', value: 'RC' },
        { label: 'DL', value: 'DL' },
      ];

  return (
    <>
    <StatusBar backgroundColor={'#18241b'}/>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
        <Header title={'Upload your product'} navigation={navigation}/>

       <View style={styles.formContainer}>
           <View style={styles.inputContainer}>
             <TextInput mode='flat' label={'Title *'} style={styles.input}/>
           </View>
           <View style={[styles.inputContainer, {marginTop: '5%'}]}>
             <TextInput mode='flat' keyboardType='number-pad' label={'Price *'} style={styles.input}/>
           </View>
           <View style={[styles.inputContainer, {marginTop: '5%'}]}>
             <TextInput mode='flat' multiline={true} numberOfLines={3} label={'Description *'} style={styles.input}/>
           </View>
           <View style={[styles.inputContainer, {marginTop: '5%'}]}>
             <TextInput mode='flat' label={'Enter your full address *'} style={styles.input}/>
           </View>

           <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              itemTextStyle={styles.itemTextStyle}
              selectedTextStyle={styles.itemTextStyle}
              placeholderTextStyle={styles.placeholderStyle}
              placeholder={!isFocus ? 'Select Category' : '...'}
              value={type}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={async (item) => {
                setType(item.value);
                setIsFocus(false);
              }}
            />

            <TouchableOpacity activeOpacity={0.6} style={styles.imageContainer}>
               <Text style={styles.buttonText}>Select images</Text>
               <Entypo name='camera' size={20} color={'#000000'} style={{marginRight: '5%', opacity: 0.6}}/>
            </TouchableOpacity>

       </View>
    </ScrollView>
    <Button backgroundColor={'#28802c'} title={'Post'}/>
    </>
  )
}

export default SellingForm

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    formContainer: {
       marginTop: '10%'
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
      imageContainer: {
         marginTop: '5%',
         width: '85%',
         alignSelf: 'center',
         borderWidth: 1,
         paddingVertical: 13,
         borderRadius: 5,
         borderColor: '#e3e3e3',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center'
      },
      buttonText: {
        marginLeft: '3%',
        color: '#000000',
        opacity: 0.6,
        fontWeight: '400',
        fontSize: 15
      }
})