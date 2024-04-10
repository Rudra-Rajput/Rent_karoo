import {StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {useGetALlCategoryQuery} from '../../redux/services/Profile';

const AllCategory = ({navigation}) => {

  const {data} = useGetALlCategoryQuery();

  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

  return (
    <View style={styles.mainContainer}>
      <Header title={'Categories'} navigation={navigation} />

        <View style={{width: WIDTH, marginVertical: 10}}>
          <FlatList
            data={data?.data}
            showsHorizontalScrollIndicator={false} // Optional: hide scroll indicator
            keyExtractor={(item, index) => index.toString()} // Use a unique key for each item
            renderItem={({item, index}) => (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('Product', {id: item?._id})}
                activeOpacity={0.5}
                style={{
                  flexDirection: 'row',  
                  alignItems: 'center',
                  width: 200,
                  height: 60,
                  marginLeft: '5%'
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
                <Text style={[styles.iconText, {marginLeft: '20%'}]}>{item?.Category}</Text>
              </TouchableOpacity>
              <View style={styles.horizontalLine}></View>
              </>
            )}
          />
        </View>
    </View>
  );
};

export default AllCategory;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFFFF',
  },
  CategoriesContainer: {
    marginTop: '5%',
    marginHorizontal: '3%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CategoriesText: {
    marginLeft: '5%',
    color: '#000000',
    fontSize: 15,
    letterSpacing: 0.5,
    fontWeight: '600',
  },
  horizontalLine: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#000000',
    marginTop: '3%',
    opacity: 0.3,
  },
  iconText: {
    fontSize: 17,
    letterSpacing: .5,
    fontWeight: '600',
    color: '#000000'
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.2
  }
});
