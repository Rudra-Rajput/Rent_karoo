import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {TextInput} from 'react-native-paper';
import Button from '../../components/Button';

const Enquiry = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    alert('Pressed');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'} />
      <Header title={'Enquiry'} navigation={navigation} />

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            onChangeText={txt => setName(txt)}
            label={'Name *'}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            onChangeText={txt => setEmail(txt)}
            label={'Email *'}
            keyboardType="email-address"
            style={[styles.input, {marginTop: '5%'}]}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            onChangeText={txt => setPhoneNumber(txt)}
            label={'Phone *'}
            maxLength={10}
            keyboardType="number-pad"
            style={[styles.input, {marginTop: '5%'}]}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            onChangeText={txt => setDetails(txt)}
            label={'Details *'}
            numberOfLines={5}
            multiline={true}
            style={[styles.input, {marginTop: '5%'}]}
          />
        </View>

        <View style={{marginTop: '25%'}}>
          <Button
            disabled={!name || !email || !phoneNo || !details}
            title={'Enquiry Now'}
            backgroundColor={
              !name || !email || !phoneNo || !details ? 'grey' : 'green'
            }
            onPress={handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    marginTop: '8%',
  },
  inputContainer: {
    marginHorizontal: '5%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    color: '#000000',
  },
});
export default Enquiry;
