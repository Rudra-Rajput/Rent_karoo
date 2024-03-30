import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Checkbox } from 'react-native-paper';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Services = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [checked, setChecked] = useState(false);;

  return (
    <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} style={styles.mainContainer}>
        <StatusBar backgroundColor={'#18241b'}/>
        <Header title={'Services'} navigation={navigation}/>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <Text style={styles.heading}>Filter services by range</Text>

            <View style={[styles.checkBoxContainer, {marginTop: '3%'}]}>
             <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
             <Text style={styles.checkText}>0km to 5km</Text>
            </View>

            <View style={[styles.checkBoxContainer, {marginTop: '1%'}]}>
             <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
             <Text style={styles.checkText}>5km to 10km</Text>
            </View>

            <View style={[styles.checkBoxContainer, {marginTop: '1%'}]}>
             <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
             <Text style={styles.checkText}>10km to 15km</Text>
            </View>

            <View style={[styles.checkBoxContainer, {marginTop: '1%'}]}>
             <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
             <Text style={styles.checkText}>15km to 20km</Text>
            </View>

            <View style={[styles.checkBoxContainer, {marginTop: '1%'}]}>
             <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
             <Text style={styles.checkText}>All range</Text>
            </View>

            <View style={{position: 'absolute', width: '100%', bottom: 10, alignSelf: 'center'}}>
               <Button title={'Apply'} backgroundColor={'#288052'} onPress={() => setModalVisible(false)}/>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{position: 'absolute', top: 10, right: 10}}
              onPress={() => setModalVisible(false)}>
              <Entypo name='circle-with-cross' size={28} color={'#000000'} style={{opacity: 0.7}}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

        <View style={styles.searchBarContainer}>
         <View style={styles.inputContainer}>
            <TextInput placeholder='Search Here...' style={styles.inputStyle} />
         </View>
         <TouchableOpacity onPress={() => setModalVisible(true)}>
           <Ionicons name='filter' size={30} color={"#000000"} style={{marginRight: '3%'}}/>
         </TouchableOpacity>
       </View>

       <View style={{marginTop: '5%', marginHorizontal: '5%'}}>
         <FlatList scrollEnabled={false} data={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]} renderItem={({item, index}) => {
            return(
                <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => navigation.navigate('Shop')} activeOpacity={0.7} style={styles.serviceItemContainer}>
                    <MaterialIcons name='plumbing' size={25} color={'#10544E'}/>
                   <Text style={styles.serviceItemText}>Plumber</Text>
                </TouchableOpacity>
                <View style={styles.horizontalLine}></View>
                </View>
            )
         }}/>
       </View>

    </ScrollView>
  )
}

export default Services

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '2%',
        marginTop: '3%',
        paddingVertical: 6,
        backgroundColor: '#FFFFFF'
      },
      inputContainer: {
        width: '85%',
        height: 45,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
      },
      inputStyle: {
        marginLeft: '2%',
        color: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E8E8E8',
        paddingLeft: 10
      },
      serviceItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      serviceItemText: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
        opacity: 0.7,
        letterSpacing: 1,
        paddingVertical: '5%',
        marginLeft: '5%'
      },
      horizontalLine: {
        height: 1,
        backgroundColor: '#E8E8E8',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '45%'
      },
      checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      checkText: {
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: .5,
        color: '#000000',
        marginLeft: '5%'
      },
      heading: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000000',
        marginLeft: '3%',
      }
})