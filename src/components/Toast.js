import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

const Toast = ({ message, onAnimationComplete, backgroundColor }) => {

const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600, // Increase duration for slower slide
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -100,
          duration: 600, // Increase duration for slower slide
          useNativeDriver: true,
        }).start(onAnimationComplete);
      }, 2000);
    });
  }, []);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }], backgroundColor: backgroundColor }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'green',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '95%',
    height: 55,
    marginTop: '2%',
    zIndex: 1
  },
  message: {
    color: 'white',
    fontSize: 16,
  },
});

export default Toast;
