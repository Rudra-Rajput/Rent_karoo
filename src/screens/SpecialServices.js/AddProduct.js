import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native-paper';
import Button from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import {useGetALlCategoryQuery, useUploadProductMutation} from '../../redux/services/Profile';
import Geolocation from '@react-native-community/geolocation';
import {useSelector} from 'react-redux';

const AddProduct = ({navigation, route}) => {

  const {token} = useSelector(state => state.auth);
  const {shopId} = route.params

  const [inputBoxes, setInputBoxes] = useState([{id: 0, nearby: ''}]);
  const [uploadProduct, {isLoading}] = useUploadProductMutation();

  const [location, setLocation] = useState(null);
  const lat = location?.latitude;
  const lng = location?.longitude;

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
      },
    );
  }, []);

  const addInputBox = () => {
    setInputBoxes([...inputBoxes, {id: inputBoxes.length, nearby: ''}]);
  };

  const removeInputBox = id => {
    setInputBoxes(prevInputBoxes =>
      prevInputBoxes.filter(box => box.id !== id),
    );
  };

  const [isFocus, setIsFocus] = useState(false);
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const {data} = useGetALlCategoryQuery();
  const type = 'Product';

  const selectDocument = async () => {
    try {
      const doc = await DocumentPicker.pick({
        allowMultiSelection: true,
        type: [DocumentPicker.types.allFiles],
      });
      setImages(doc); // Use `doc` directly instead of `doc[0]`
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
      } else {
        console.log(error);
      }
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('name', name);
    data.append('subtitle', subtitle);
    data.append('description', description);
    data.append('city', city);
    data.append('price', price);
    data.append('email', email);
    data.append('phoneNo', phoneNumber);
    data.append('area', area);
    data.append('pincode', pincode);
    data.append('category', category);
    data.append('type', type);
    data.append('lat', lat);
    data.append('lng', lng);
    data.append('shop', shopId);
    inputBoxes?.forEach((doc) => {
      data.append('nearby', doc?.nearby);
    });
    images.forEach((image, index) => {
      data.append('photos', {
        name: image.name,
        type: image.type,
        uri: image.uri,
      });
    });
    const res = await uploadProduct({token, data})
    if (res?.data?.success === true) {
      alert(res?.data?.message)
      navigation.goBack();
    } else {
      alert(res?.error?.data?.error)
    }
};

  return (
    <>
      <StatusBar backgroundColor={'#18241b'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <Header title={'Upload your product'} navigation={navigation} />

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              mode="flat"
              onChangeText={txt => setName(txt)}
              label={'Title *'}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="flat"
              onChangeText={txt => setSubtitle(txt)}
              label={'Sub Title *'}
              style={[styles.input, {marginTop: '5%'}]}
            />
          </View>
          <View style={[styles.inputContainer, {marginTop: '5%'}]}>
            <TextInput
              mode="flat"
              onChangeText={txt => setPrice(txt)}
              keyboardType="number-pad"
              label={'Price *'}
              style={styles.input}
            />
          </View>
          <View style={[styles.inputContainer, {marginTop: '5%'}]}>
            <TextInput
              mode="flat"
              onChangeText={txt => setPhoneNumber(txt)}
              keyboardType="number-pad"
              label={'Phone *'}
              maxLength={10}
              style={styles.input}
            />
          </View>
          <View style={[styles.inputContainer, {marginTop: '5%'}]}>
            <TextInput
              mode="flat"
              onChangeText={txt => setEmail(txt)}
              keyboardType="email-address"
              label={'Email *'}
              style={styles.input}
            />
          </View>
          <View style={[styles.inputContainer, {marginTop: '5%'}]}>
            <TextInput
              mode="flat"
              onChangeText={txt => setDescription(txt)}
              multiline={true}
              numberOfLines={3}
              label={'Description *'}
              style={styles.input}
            />
          </View>
          <View style={[styles.inputContainer, {marginTop: '5%'}]}>
            <TextInput
              mode="flat"
              onChangeText={txt => setArea(txt)}
              label={'Area *'}
              style={styles.input}
            />
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: '5%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <TextInput
              mode="flat"
              onChangeText={txt => setCity(txt)}
              label={'City *'}
              style={[styles.input, {width: '45%'}]}
            />
            <TextInput
              mode="flat"
              onChangeText={txt => setPincode(txt)}
              keyboardType="number-pad"
              label={'Pin code *'}
              style={[styles.input, {width: '45%'}]}
            />
          </View>

          <View
            style={[
              styles.inputContainer,
              {
                marginTop: '5%',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                borderWidth: 1,
                borderColor: '#ebebeb',
                borderRadius: 5,
                padding: 10,
              },
            ]}>
            {inputBoxes.map((item, index) => (
              <View style={{width: '100%'}}>
                <TextInput
                  mode="flat"
                  onChangeText={txt =>
                    setInputBoxes(prevInputBoxes =>
                      prevInputBoxes.map(box =>
                        box.id === index ? {...box, nearby: txt} : box,
                      ),
                    )
                  }
                  key={index}
                  label={'Near-by place *'}
                  style={[styles.input, {width: '100%'}]}
                />
                {index == 0 ? null : (
                  <TouchableOpacity
                    onPress={() => removeInputBox(item.id)}
                    style={{position: 'absolute', top: 20, right: 0}}
                    activeOpacity={0.6}>
                    <MaterialCommunityIcons
                      name="delete-circle"
                      size={30}
                      color={'red'}
                    />
                  </TouchableOpacity>
                )}
              </View>
            ))}
            <TouchableOpacity
              style={{position: 'absolute', right: 10, top: 15}}
              activeOpacity={0.6}
              onPress={addInputBox}>
              <Ionicons name="add-circle-sharp" size={30} color={'#520a21'} />
            </TouchableOpacity>
          </View>

          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            data={data?.data.map(item => ({
              label: item.Category,
              value: item._id,
            }))}
            maxHeight={300}
            labelField="label"
            valueField="value"
            itemTextStyle={styles.itemTextStyle}
            selectedTextStyle={styles.itemTextStyle}
            placeholderTextStyle={styles.placeholderStyle}
            placeholder={!isFocus ? 'Select Category *' : '...'}
            value={category} // Use the _id of the selected item as the value
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={async item => {
              setCategory(item.value); // Use item.value instead of item.label
              setIsFocus(false);
            }}
          />

          <TouchableOpacity
            onPress={selectDocument}
            activeOpacity={0.6}
            style={styles.imageContainer}>
            <Text style={styles.buttonText}>Select images *</Text>
            <Entypo
              name="camera"
              size={20}
              color={'#000000'}
              style={{marginRight: '5%', opacity: 0.6}}
            />
          </TouchableOpacity>
        <View style={{marginHorizontal: '8%', marginTop: '3%'}}>
          <Text style={{fontSize: 12, color: '#000000', letterSpacing: .5, fontWeight: '500'}}>{images.map(image => image.uri).join(', ')}</Text>
        </View>
        </View>
        <View style={{marginVertical: '15%'}}>
          <Button
            onPress={handleSubmit}
            disabled={isLoading}
            backgroundColor={'#28802c'}
            title={isLoading ? <ActivityIndicator size={'small'} color={'#FFFFFF'}/> : 'Post'}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    marginTop: '10%',
  },
  inputContainer: {
    width: '85%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  itemTextStyle: {
    color: '#000000',
  },
  placeholderStyle: {
    color: '#000000',
    fontSize: 15,
  },
  dropdown: {
    margin: 15,
    height: 50,
    paddingLeft: '7%',
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    color: '#000000',
    opacity: 0.8,
  },
  imageContainer: {
    marginTop: '5%',
    width: '85%',
    alignSelf: 'center',
    borderWidth: 1,
    paddingVertical: 13,
    borderRadius: 5,
    borderColor: '#e3e3e3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: '3%',
    color: '#000000',
    opacity: 0.6,
    fontWeight: '400',
    fontSize: 15,
  },
});
