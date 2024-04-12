import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header';
import {
  useGetAllServicesQuery,
  useGetAllMyServicesQuery,
} from '../../redux/services/Profile';
import {useSelector} from 'react-redux';
import FilterModal from '../../components/FilterModal';

const Services = ({navigation}) => {
  const [serviceType, setServiceType] = useState('allServices');
  const [mainData, setMainData] = useState(null);

  const [dist, setDist] = useState(500000);
  const [search, setSearch] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  const handleSelectedValue = selectedValue => {
    const numberValue = parseInt(selectedValue, 10);
    setDist(numberValue);
  };

  const {token} = useSelector(state => state.auth);
  const {data, isLoading} = useGetAllServicesQuery({search, dist});
  const {data: MyServices} = useGetAllMyServicesQuery(token);

  useEffect(() => {
    if (serviceType === 'allServices') {
      setMainData(data);
    } else {
      setMainData(MyServices);
    }
  }, [serviceType, data, MyServices]);

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          style={styles.mainContainer}>
          <StatusBar backgroundColor={'#18241b'} />

          <View style={{position: 'relative', width: '100%'}}>
            <Header title={'Service'} navigation={navigation} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Adservices')}
              style={{position: 'absolute', right: 20, top: 14}}>
              <Entypo name="squared-plus" size={35} color={'#520a21'} />
            </TouchableOpacity>
            {serviceType === 'allServices' ? (
              <TouchableOpacity
                onPress={() => setServiceType('MyServices')}
                activeOpacity={0.8}
                style={{
                  position: 'absolute',
                  right: 60,
                  top: 18,
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  borderRadius: 5,
                  backgroundColor: '#520a21',
                  height: 28,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '700',
                    letterSpacing: 0.5,
                    color: '#FFFFFF',
                  }}>
                  My Services
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setServiceType('allServices')}
                activeOpacity={0.8}
                style={{
                  position: 'absolute',
                  right: 60,
                  top: 18,
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  borderRadius: 5,
                  backgroundColor: '#520a21',
                  height: 28,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '700',
                    letterSpacing: 0.5,
                    color: '#FFFFFF',
                  }}>
                  All Services
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.searchBarContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Search Here..."
                style={styles.inputStyle}
                onChangeText={setSearch}
              />
            </View>
            <TouchableOpacity onPress={handleModal}>
              <Ionicons
                name="filter"
                size={30}
                color={'#000000'}
                style={{marginRight: '3%'}}
              />
            </TouchableOpacity>
          </View>

          {/* TODO: Modal */}
          <FilterModal visible={isVisible} onClose={handleModal} onSelectedValue={handleSelectedValue}/>

          {mainData?.data.length === 0 ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '40%',
              }}>
              <Image
                source={require('../../assets/notfound.png')}
                style={{width: 280, height: 280}}
              />
            </View>
          ) : (
            <>
              <View style={{marginTop: '5%', marginHorizontal: '5%'}}>
                <FlatList
                  scrollEnabled={false}
                  data={mainData?.data}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: '#FFFFFF',
                          paddingVertical: 5,
                        }}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Shop', {item})}
                          activeOpacity={0.9}
                          style={styles.serviceItemContainer}>
                          <View style={styles.cardRatingItem}>
                            <Text style={styles.heading}>{item?.name}</Text>
                            {/* <Text style={{fontSize: 20, color: '#ebdc09'}}>★ ★ ★ ★ ★ </Text> */}
                          </View>
                          <View style={styles.cardItem}>
                            <Text style={styles.serviceItemText}>
                              Specialization - {item?.subtitle}
                            </Text>
                          </View>
                          <View style={{marginTop: 10}}>
                            <Text style={styles.serviceItemText}>
                              Email - {item?.email}
                            </Text>
                            <Text style={styles.serviceItemText}>
                              Phone - {item?.phoneNo}
                            </Text>
                            <Text style={styles.serviceItemText}>
                              Address - {`${item?.fullAddress?.area}`}
                            </Text>
                            <Text style={styles.serviceItemText}>
                              City -{' '}
                              {`${item?.fullAddress?.city}(${item?.fullAddress?.pincode})`}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default Services;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginTop: '3%',
    paddingVertical: 6,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    width: '85%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  inputStyle: {
    marginLeft: '2%',
    color: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E8E8E8',
    paddingLeft: 10,
  },
  serviceItemContainer: {
    backgroundColor: '#f2f3f5',
    elevation: 1,
    borderRadius: 8,
    paddingVertical: 10,
  },
  serviceItemText: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000000',
    opacity: 0.7,
    letterSpacing: 1,
    marginLeft: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '45%',
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
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRatingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
