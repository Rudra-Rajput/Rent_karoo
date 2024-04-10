import { StatusBar, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { getToken } from '../../redux/services/LocalStorage';
import { StackActions } from '@react-navigation/native';

const Splash = ({ navigation }) => {

  React.useEffect(() => {
    setTimeout(() => {
      (async () => {
        const token = await getToken();
        const routeName = token !== undefined ? 'Main' : 'Landing';
        navigation.dispatch(StackActions.replace(routeName));
      })();
    }, 3000);
  });  

  <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'}/>

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        source={require('../../assets/LottieFiles/splash.json')}
        autoPlay
        loop
        style={{width: 200, height: 200}}
      />
    </View>
  );
};

export default Splash;
