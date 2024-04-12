import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Modal, TouchableOpacity } from 'react-native';
import { unsetUserToken } from '../redux/Slices/authSlice';
import { removeToken } from '../redux/services/LocalStorage';
import { StackActions } from '@react-navigation/native';

const LogOutModal = ({ isOpen, navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const scaleValue = useRef(new Animated.Value(0)).current;

  const handleLogOut = async() => {
    unsetUserToken({token: null});
    await removeToken('token');
    navigation.dispatch(StackActions.replace('Landing'));
  }

  const showModal = () => {
    setModalVisible(true);
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  useEffect(() => {
    if (isOpen) {
      showModal();
    } else {
      hideModal();
    }
  }, [isOpen]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => hideModal()}
      >
        <View style={styles.modalContainer}>
          <Animated.View
            style={[styles.modalContent, { transform: [{ scale: scaleValue }] }]}
          >
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <View style={styles.btnContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => hideModal()}>
              <Text style={styles.button}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => handleLogOut()}>
              <Text style={styles.button}>Logout</Text>
            </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '85%',
  },
  modalText: {
    marginBottom: 20,
    color: '#000000'
  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  btnContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default LogOutModal;
