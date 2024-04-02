import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { Switch } from 'react-native-paper';

const Setting = ({navigation}) => {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'} />
      <Header title={'Setting'} navigation={navigation}/>

      <TouchableOpacity activeOpacity={0.8} style={[styles.section, {marginTop: '5%'}]}>
        <Text style={styles.sectionText}>Notification</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </TouchableOpacity>

    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    section: {
        width: '92%',
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        alignItems: 'center'
      },
      sectionText: {
        marginLeft: '5%',
        letterSpacing: .5,
        color: '#000000',
        fontWeight: '600',
        fontSize: 15
      }
})