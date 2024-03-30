import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Image, StatusBar, ScrollView } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const images = [
    'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw',
    'https://i.pinimg.com/236x/51/44/71/5144713488ef4a7f88c98ebe34fff03a.jpg',
    'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGCg4pLQ1ckWPPMqf4s4eLyiKKMUU9bpjtA&usqp=CAU',
  ];
  
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / WIDTH);
    setCurrentIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width: WIDTH, height: 220, alignItems: 'center', marginTop: '3%'}}>
            <Image source={{ uri: item }} style={{ width: '100%', height: 250, resizeMode: 'cover' }} />
          </View>
        )}
        onScroll={handleScroll}
      />
      <View style={styles.indicatorsContainer}>
        {images.map((_, index) => (
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
