import {Image, Text, View} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Landing');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png',
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 150,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default Splash;
