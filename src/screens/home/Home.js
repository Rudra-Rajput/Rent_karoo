import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterModal from '../../components/FilterModal';
import {
  useGetALlCategoryQuery,
  useGetAllUserProductsQuery,
} from '../../redux/services/Profile';
import {useDispatch} from 'react-redux';
import { setUserToken } from '../../redux/Slices/authSlice';
import {getLocation, getLocationName, getToken, getUser} from '../../redux/services/LocalStorage';
import { setUser } from '../../redux/Slices/userSlice';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const Home = ({navigation}) => {

  const [dist, setDist] = useState(500000)

  const handleSelectedValue = (selectedValue) => {
    const numberValue = parseInt(selectedValue, 10);
    setDist(numberValue)
  };

  const [locationName, setLocationName] = useState('');
  const [location, setLocation] = useState('');
  const [search, setSearch] = useState('');

  // let parsedLocation = {};
  // try {
  //   parsedLocation = JSON.parse(location);
  //  } catch (error) {
  //   console.error('Error parsing location data:', error);
  //  }

  // const lat = parsedLocation.latitude
  // const lng = parsedLocation.longitude

  // let locationData = {};
  // try {
  //  locationData = JSON.parse(locationName);
  // } catch (error) {
  //  console.error('Error parsing location data:', error);
  // }
  // const { streetNumber, locality, subLocality } = locationData;

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getLocation();
      setLocation(location);
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      const locationName = await getLocationName();
      setLocationName(locationName);
    };
    fetchLocation();
  }, []);
  

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const token = await getToken();
      const user = await getUser();
      dispatch(setUserToken({token: token}));
      dispatch(setUser({user: user}));
    })();
  }, []);

  const {data} = useGetALlCategoryQuery();
  const {
    data: getAllProduct,
    isLoading,
    refetch,
  } = useGetAllUserProductsQuery({dist, search, nearby: search});

  const [refreshing, setRefreshing] = useState(false);
  const load = () => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef(null);

  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  const images = [
    require('../../assets/Slider/slider1.png'),
    require('../../assets/Slider/slider2.png'),
    require('../../assets/Slider/slider3.png'),
    require('../../assets/Slider/slider4.png'),
    require('../../assets/Slider/slider5.png'),
  ];

  useEffect(() => {
    if (images?.length > 0) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, images]);

  const handleScroll = event => {
    const x = event.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(x / WIDTH));
  };

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => load()} />
          }
          showsVerticalScrollIndicator={false}
          style={styles.mainContainer}>
          <StatusBar backgroundColor={'#18241b'} />
          {/* TODO: Header */}
          <View style={styles.headerContainer}>
            <View>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.headerImage}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Location')}
              activeOpacity={0.4}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '45%',
                justifyContent: 'space-around',
              }}>
              <Ionicons name="location-outline" size={24} color={'#000000'} />
              <Text style={styles.locationText}>{'Indrapuri c sector'}</Text>
            </TouchableOpacity>
          </View>

          {/* TODO: Search Bar */}
          <View style={styles.searchBarContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Find Cars, Mobile Phones and More..."
                style={styles.inputStyle}
                onChangeText={setSearch}
              />
            </View>
            <TouchableOpacity onPress={() => handleModal()}>
              <FontAwesome
                name="filter"
                size={30}
                color={'#000000'}
                style={{marginLeft: '0%'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <Ionicons
                name="notifications-circle-outline"
                size={30}
                color={'#000000'}
                style={{marginRight: '0%'}}
              />
            </TouchableOpacity>
          </View>

          {/* TODO: Categories */}
          <View style={styles.categoryContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: '3%',
              }}>
              <Text
                onPress={() => navigation.navigate('AllCategory')}
                style={styles.categoryText}>
                Browse categories
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('AllCategory')}>
                <Text style={styles.categoryText}>See all</Text>
              </TouchableOpacity>
            </View>
          </View>

          
          <View style={{width: WIDTH, marginVertical: 10}}>
            <FlatList
              data={data?.data}
              horizontal
              showsHorizontalScrollIndicator={false} // Optional: hide scroll indicator
              keyExtractor={(item, index) => index.toString()} // Use a unique key for each item
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Product', {id: item?._id})
                  }
                  activeOpacity={0.5}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 75,
                    height: 75,
                  }}>
                  <Image
                    source={{
                      uri: `https://rent-karoo.s3.ap-south-1.amazonaws.com/${item?.Logo}`,
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={styles.iconText}>{item?.Category}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* TODO: Modal */}
          <FilterModal visible={isVisible} onClose={handleModal} onSelectedValue={handleSelectedValue}/>

          <Text
            style={[styles.categoryText, {marginLeft: '3%', fontSize: 18, textDecorationLine: 'none'}]}>
            Special shop
          </Text>
          {/* TODO: Slider */}
          <View style={{height: HEIGHT / 4, marginTop: 8}}>
            <FlatList
              ref={flatListRef}
              data={images}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              pagingEnabled
              onMomentumScrollEnd={handleScroll}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      width: WIDTH,
                      height: HEIGHT / 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('AllShop')}
                      activeOpacity={0.8}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 12,
                      }}>
                      <Image
                        source={item}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'stretch',
                        }}
                      />
                      <View
                        style={{
                          width: WIDTH,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          bottom: 20,
                        }}></View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>

          {/* TODO: Recommendate Product */}
          <View style={styles.horizontalLine}></View>

          {getAllProduct?.data.length === 0 ? null :<View style={{marginHorizontal: '2%', marginTop: '3%'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#000000',
                letterSpacing: 1,
              }}>
              {getAllProduct?.data ? 'Fresh recommendations' : null}
            </Text>
          </View>}
          
          {getAllProduct?.data.length === 0 ?
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
             <Text style={styles.noDataText}>No product found</Text>
          </View> :
          <View style={{flex: 1, alignSelf: 'center'}}>
            <FlatList
              scrollEnabled={false}
              numColumns={2}
              data={getAllProduct?.data}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProductDetail', {item})}
                    activeOpacity={0.8}
                    style={styles.card}>
                    <Image
                      source={{
                        uri: `https://rent-karoo.s3.ap-south-1.amazonaws.com/${item?.photos[0]}`,
                      }}
                      style={styles.productImage}
                    />
                    <View style={{marginTop: '3%', marginLeft: '5%'}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontWeight: '600',
                          fontSize: 15,
                        }}>
                        ₹ {item?.price}
                      </Text>
                      <Text
                        style={{
                          color: '#000000',
                          fontWeight: '400',
                          fontSize: 13,
                          opacity: 0.7,
                        }}>
                        {item?.name}
                      </Text>
                      <View
                        style={{
                          marginTop: '8%',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Ionicons
                          name="location-outline"
                          size={18}
                          color={'#000000'}
                          style={{opacity: 0.5}}
                        />
                        <Text
                          style={{
                            color: '#000000',
                            fontWeight: '400',
                            fontSize: 12,
                            opacity: 0.5,
                            marginLeft: '1%',
                          }}>
                          {`${item?.fullAddress?.area} ${item?.fullAddress?.city} (${item?.fullAddress?.pincode})`}
                        </Text>
                      </View>
                    </View>

                    {/* <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.iconContainer}>
                      <AntDesign
                        name="hearto"
                        size={15}
                        color={'#000000'}
                        style={{opacity: 0.9}}
                      />
                    </TouchableOpacity> */}
                    
                  </TouchableOpacity>
                );
              }}
            />
          </View>}

        </ScrollView>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0%',
  },
  headerImage: {
    width: 55,
    height: 55,
    borderRadius: 55,
    resizeMode: 'contain',
  },
  locationText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginTop: '3%',
    paddingVertical: 6,
    backgroundColor: '#e6ebf2',
  },
  inputContainer: {
    width: '80%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  inputStyle: {
    marginLeft: '2%',
    color: '#000000',
  },
  categoryContainer: {
    backgroundColor: '#FFFFFF',
    width: WIDTH,
    elevation: 1,
    paddingVertical: 20,
  },
  categoryText: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  iconText: {
    letterSpacing: 0.5,
    color: '#000000',
    opacity: 0.6,
    fontSize: 13,
    fontWeight: '600',
    marginTop: '15%',
  },
  horizontalLine: {
    width: '100%',
    height: 6,
    backgroundColor: '#e6ebf2',
  },
  card: {
    width: '46%',
    borderWidth: 2,
    borderColor: '#dcdedc',
    borderRadius: 5,
    margin: '2%',
    paddingVertical: 15,
  },
  productImage: {
    width: 145,
    height: 130,
    borderRadius: 5,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 15,
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: '#f2f5f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceButton: {
    marginVertical: '3%',
    marginLeft: '3%',
  },
  serviceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 0.5,
  },
  specialServicesContainer: {
    marginVertical: '2%',
    width: '100%',
    height: 180,
  },
  specialServicesImage: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  noDataText: {
    color: 'red',
    letterSpacing: 1,
    fontWeight: '600',
    fontSize: 16
  }
});
