import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import io from 'socket.io-client';

const ChatBox = ({navigation}) => {

  const socket = useMemo(() => io("https://server.rentkaroo.com"), []);
  const [messages, setMessages] = useState([]);
  console.log(messages, 'messages')

  useEffect(() => {
    socket.on("join", (data) => {
      console.log(data, 'data');
      setSocketId(socket.id);
      setMessages((messages) => [...messages, data?.message]);
    });    socket.on("newChat", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });    socket.on("chatCreated", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });    socket.on("recvMessage", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });    socket.on("welcome", (s) => {
      console.log(s);
    });    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.mainContainer}>

      <StatusBar backgroundColor={'#18241b'}/>

      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}>
          <MaterialIcons
            name="arrow-back-ios"
            size={23}
            color={'#000000'}
            style={{opacity: 0.7}}
          />
        </TouchableOpacity>
        <View style={{marginLeft: '12%'}}>
          <Image source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/037/453/563/small_2x/ai-generative-superhero-child-playing-video-game-with-joystick-sitting-on-the-couch-at-home-children-gaming-and-technology-concept-photo.jpg'}} style={{width: 35, height: 35, borderRadius: 35, resizeMode: 'cover'}}/>
        </View>
        <View style={{marginLeft: '5%'}}>
          <Text style={styles.headerText}>Rudransh singh</Text>
        </View>
      </View>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: '5%',
    alignItems: 'center',
    // backgroundColor: '#ededed',
    backgroundColor: '#FFFFFF',
    elevation: 2
  },
  headerText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1
  },
});

export default ChatBox;
