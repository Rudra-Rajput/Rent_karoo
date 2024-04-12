import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Checkbox} from 'react-native-paper';

const FilterModal = ({ onClose, visible, onSelectedValue }) => {

  const [selectedValue, setSelectedValue] = useState('');

  const handleCheckboxSelection = (value) => {
    setSelectedValue(value);
    onSelectedValue(value);
    onClose()
  };

  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}>
           <View style={styles.modalContainer}>
               <TouchableOpacity
                  activeOpacity={1}
                  style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.heading}>Filter product by range</Text>

                    <View style={[styles.checkBoxContainer, {marginTop: '3%'}]}>
                      <Checkbox
                        status={selectedValue === '5000' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          handleCheckboxSelection('5000');
                        }}
                      />
                      <Text style={styles.checkText}>0km to 5km</Text>
                    </View>

                    <View style={[styles.checkBoxContainer, {marginTop: '1%'}]}>
                      <Checkbox
                        status={selectedValue === '10000' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          handleCheckboxSelection('10000');
                        }}
                      />
                      <Text style={styles.checkText}>5km to 10km</Text>
                    </View>

                    <View style={[styles.checkBoxContainer, {marginTop: '1%'}]}>
                      <Checkbox
                        status={selectedValue === '15000' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          handleCheckboxSelection('15000');
                        }}
                      />
                      <Text style={styles.checkText}>10km to 15km</Text>
                    </View>

                    <View style={[styles.checkBoxContainer, {marginTop: '1%'}]}>
                      <Checkbox
                        status={selectedValue === '20000' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          handleCheckboxSelection('20000');
                        }}
                      />
                      <Text style={styles.checkText}>15km to 20km</Text>
                    </View>

                    <View style={[styles.checkBoxContainer, {marginTop: '1%'}]}>
                      <Checkbox
                        status={selectedValue === '500000' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          handleCheckboxSelection('500000');
                        }}
                      />
                      <Text style={styles.checkText}>All range</Text>
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{position: 'absolute', top: 10, right: 10}}
                      onPress={() => onClose()}
                      >
                      <Entypo
                        name="circle-with-cross"
                        size={28}
                        color={'#000000'}
                        style={{opacity: 0.7}}
                      />
                    </TouchableOpacity>
                    
                  </View>
                </TouchableOpacity>
           </View>
        </Modal>
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '35%',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#000000',
    marginLeft: '5%',
  },
});
