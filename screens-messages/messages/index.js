import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PropTypes } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import { Ionicons } from '@expo/vector-icons';
import style from "./style"
import io from 'socket.io-client';
window.navigator.userAgent = 'ReactNative';
import defaultmessages from './messages'

const SOCKET_URL = "https://oyabackend.herokuapp.com/talk"

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      messages: defaultmessages,
      socketNum: '',
      volunteer: true,
      user: false,
      userId: '',
      secure: true,
      agent: false,
    };
  }

  componentDidMount() {
    this.handleUser()
  }

  handleUser = async () => {
    try {
      let volunteer = await AsyncStorage.getItem('volunteer');
      console.log('volunteer', volunteer)
      let socket = await AsyncStorage.getItem('Vsocket' || 'socket');

      if (volunteer === "true") {
        this.setState({ volunteer: true })
        this.setState({ userId: '9999'})
        this.setMySocket(socket);
      } else {
        this.setState({ user: true })
        this.setMySocket(socket);
        this.setState({ userId: Math.round(Math.random() * 100) })
      }
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  setMySocket = async (socket) => {
    // GET SOCKET ID AND SET THE STATE in local storage
    try {
      this.setState({ socketNum: socket })
      this.socketEvents()
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  //${this.state.socketNum}
  socketEvents = () => {
    console.log("------ CONNECT EVENTS ------")
    
    this.socket = io.connect(SOCKET_URL, {
      jsonp: false,
      secure: true,
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: Infinity,
      transports: ["websocket"]
    });

    console.log("Connection is being established")

    this.socket.on('connected_success', () => {
      this.setState({ isConnected: true });
      this.socket.emit('room', this.state.socketNum)
      console.log("connected? yes! and setting room")
    });

    this.socket.on('disconnection', () => {
      this.chatEnded();
      console.log("Connection is disconnected")
    });

    // recieve message
    this.socket.on('broadcast', messages => {
      this._storeMessages(messages);
      console.log('received', messages);
    });
  }

  componentWillUnmount() { }


  chatEnded = () => {
    fetch(`https://oyabackend.herokuapp.com/volunteer/done/chat`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        socket: this.state.Socket
      })
    }).then(
      console.log("volunteer is now avail")
    )
      .catch(err => console.warn(err))
  }

  // message events below ========================================================

  // Event listeners

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend = (messages = []) => {
    this.socket.emit('chat message', {
      message: messages[0],
      room: this.state.socketNum});
    this._storeMessages(messages);
    console.log(this.state.messages);
  }

  disconnectConvo = () => {
    this.socket.emit('leave room', {
      room: this.state.socketNum
    })
    console.log("Connection is disconnected")
    this.chatEnded();
  }

  // Helper functions
  _storeMessages = (messages) => {
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
          <Ionicons
            name={
              Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'
            }
            size={40}
            style={style.back}
            onPress={this.handleBackPress}
          />
        </View>
        {/* // this is the socket IO chat */}
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: this.state.userId,
          }}
          shouldUpdateMessage={() => true}
        />
      </View >
    );
  }

  handleBackPress = () => {
    // console.log ('volunteer', this.state.volunteer)
    // console.log ('user', this.state.user)
    if (this.state.volunteer) {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Account');
    } else if (this.state.user) {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Jobs');
    }
  }

}

module.exports = ChatRoom;