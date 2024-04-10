import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const FilterModal = ({ onClose, visible }) => {
  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}>
           <View style={styles.modalContainer}>
               <TouchableOpacity activeOpacity={0.8} style={styles.closeButtonContainer} onPress={() => onClose()}>
                   <Entypo name='circle-with-cross' size={25} color={'#FFFFFF'}/>
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#18241b',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  closeButtonContainer: {
    position: 'absolute',
    right: 7,
    top: 7
  }
});
