import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapScreen = ({navigation, route}) => {

    const { lat, lng } = route.params;

    const handleMapPress = (event) => {
      setSelectedLocation({
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
      });
      navigation.navigate('Main')
    };

  const [selectedLocation, setSelectedLocation] = useState(null);
  console.log(selectedLocation, 'selectedLocation')

  const handleLocationSelect = (place) => {
    setSelectedLocation({
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
      name: place.name,
      address: place.formatted_address,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: selectedLocation ? selectedLocation.latitude : lat,
          longitude: selectedLocation ? selectedLocation.longitude : lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title={selectedLocation.name}
            description={selectedLocation.address}
          />
        )}
      </MapView>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          handleLocationSelect(details);
        }}
        query={{
          key: 'AIzaSyBF0k5AKWUMa-MbmKp-WcSB1Nde3IUMHEI',
          language: 'en',
        }}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'absolute',
            top: 0,
            width: '100%',
          },
          textInputContainer: {
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
