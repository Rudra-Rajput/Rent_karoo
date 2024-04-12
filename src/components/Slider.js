import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const Slider = ({photos}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / WIDTH);
    setCurrentIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={photos}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width: WIDTH, height: 220, alignItems: 'center', marginTop: '3%'}}>
            <Image source={{ uri: `https://rent-karoo.s3.ap-south-1.amazonaws.com/${item}` }} style={{ width: '100%', height: 250, resizeMode: 'cover' }} />
          </View>
        )}
        onScroll={handleScroll}
      />
      <View style={styles.indicatorsContainer}>
        {photos?.map((_, index) => (
          <View
            key={index}
            style={[styles.indicator, { backgroundColor: index === currentIndex ? 'blue' : 'gray' }]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  indicatorsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '2%'
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Slider;
