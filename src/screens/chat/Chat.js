import { FlatList, Image, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Chat = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#18241b'}/>
      <Header title={'Chats'} navigation={navigation}/>

      <View style={styles.searchContainer}>
        <EvilIcons name='search' size={25} color={'#000000'} style={{marginLeft: '2%', marginTop: '-1%', opacity: 0.6}}/>
        <TextInput placeholder='Search chats . . .' style={{width: '95%', marginLeft: '2%', color: '#000000'}}/>
      </View>

      <FlatList showsVerticalScrollIndicator={false} data={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]} renderItem={() => {
        return(
          <>
          <TouchableOpacity onPress={() => navigation.navigate('ChatBox')} activeOpacity={0.8} style={styles.cardContainer}>
             <View style={styles.cardProfileContainer}>
               <Image source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/037/453/563/small_2x/ai-generative-superhero-child-playing-video-game-with-joystick-sitting-on-the-couch-at-home-children-gaming-and-technology-concept-photo.jpg'}} style={styles.cardProfile}/>
             </View>
             <View style={styles.nameContainer}>
                <Text style={{fontSize: 15, fontWeight: '500', color: '#000000', marginTop: '-1%', opacity: 0.8}}>Rudransh singh</Text>
                <Text style={{fontSize: 13, fontWeight: '800', color: '#000000', marginTop: '1%'}}>1 new message</Text>
             </View>
          </TouchableOpacity>
           <View style={styles.horizontalLine}></View>
          </>
        )
      }}/>

    </View>
  )
}

const styles = StyleSheet.create({
   mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
   },
   cardContainer: {
     marginHorizontal: '4%',
     elevation: 1,
     paddingVertical: 5,
     flexDirection: 'row',
     alignItems: 'center',
     marginTop: '5%'
   },
   cardProfileContainer: {
     width: 60,
     height: 60,
     borderRadius: 30,
   },
   cardProfile: {
     width: 55,
     height: 55,
     borderRadius: 55,
     resizeMode: 'cover'
   },
   nameContainer: {
     marginLeft: '10%'
   },
   horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.1
   },
   searchContainer: {
     marginTop: '5%',
     width: '90%',
     alignSelf: 'center',
     borderWidth: 1,
     borderColor: '#e1e6e2',
     borderRadius: 12,
     height: 45,
     flexDirection: 'row',
     alignItems: 'center'
   }
})

export default Chat;