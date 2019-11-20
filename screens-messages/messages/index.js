import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PropTypes } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import chat from '../chat';
import { Ionicons } from '@expo/vector-icons';
import style from "./style"
import SocketIOClient from 'socket.io-client';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      Socket: null,
      Volunteer: false,
      User: false,
      userId: null
    };
    this.socket = SocketIOClient(`${chat.serverIP}/socket/talk/${this.socket}`);
    this.socket.on('message', this.onReceivedMessage);

   
  }

  state = {

  };


  ComponentdidMount() {
    this.handleUser()
  }


  handleUser = async () => {
    try {
      let volunteer = await AsyncStorage.getItem('Volunteer');
      let socket = await AsyncStorage.getItem('Vsocket' || 'socket');

      if (volunteer) {
        this.setState({ Volunteer: true })
        this.setState({ userId: socket })
        this.setMySocket(socket);
        this.determineUser();
      } else {
        this.setState({ User: true })
        this.setMySocket(socket);
        this.setState({ userId: Math.round(Math.random() * 10000) })
      }
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  determineUser = () => {
    let userId = this.state.userId
    this.socket.emit('userJoined', userId);
  }


  setMySocket = async (socket) => {
    // GET SOCKET ID AND SET THE STATE in local storage
    try {
      this.setState({ Socket: socket })
      this.socketEvents()
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  componentWillUnmount() { }

  // message events below ========================================================

  // Event listeners
  /**
   * When the server sends a message to this.
   */
  onReceivedMessage(messages) {
    this._storeMessages(messages);
  }

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend(messages = []) {
    this.socket.emit('message', messages[0]);
    this._storeMessages(messages);
  }

  // Helper functions
  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Ionicons
            name={
              Platform.OS === 'ios' ? 'ios-arrow-dropleft' : 'md-arrow-dropleft'
            }
            size={30}
            style={style.back}
            onPress={this.handleBackPress}
          />
        </View>
        <View style={style.Textcontainer}>

          {/* // this is the socket IO chat */}
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}

          />
        </View >
      </View >
    );
  }

  handleBackPress = () => {
    if (this.state.Volunteer) {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Account');
    } else if (this.state.User) {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Jobs');
    }
  }

}

module.exports = ChatRoom;