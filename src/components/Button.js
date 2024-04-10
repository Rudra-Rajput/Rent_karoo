import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({onPress, title, backgroundColor, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    borderRadius: 5,
    height: 48,
    backgroundColor: '#1631b8',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    letterSpacing: 1,
    fontWeight: '500',
    fontSize: 15,
  },
});
