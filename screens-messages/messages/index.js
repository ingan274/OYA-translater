import React, { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PureComponent, Component, PropTypes } from 'react-native';
import GiftedMessenger from '../../components/gifted-messenger';
import chat from '../chat';
import { Ionicons } from '@expo/vector-icons';
import style from "./style"

// You need to set `window.navigator` to something in order to use the socket.io
// client. You have to do it like this in order to use the debugger because the
// debugger in React Native runs in a webworker and only has a getter method for
// `window.navigator`.
// Remove this after socket.io releases with this patch
// https://github.com/socketio/engine.io-parser/pull/55
if (window.navigator && Object.keys(window.navigator).length == 0) {
  let window = Object.assign(window, { navigator: { userAgent: 'ReactNative' } });
}

import io from 'socket.io-client';

class ChatRoom extends PureComponent {
  constructor(props) {
    super(props);

    // this server need to change in chat
    const socketServer = 'http://' + chat.serverIP + ':4000';

    const options = { transports: ['websocket'], forceNew: true };
    this.socket = io(socketServer, options);

    this._messages = [];

    this.state = {
      socket: null,
      Volunteer: false,
      User: false
    };
  }

  componentDidMount() {
    this._getChatRoom();

    // Socket events
    this.socket.on('connect', () => {
      console.log('connected to socket.io server');
    });

    this.socket.on('disconnect', () => {
      console.log('disconnected from socket.io server');
    });

    var that = this;
    this.socket.on('new message', function (data) {
      console.log('new message', JSON.stringify(data));
      that.handleReceive({
        text: data.message,
        name: that.props.recipientEmail,
        image: null,
        position: 'left',
        date: new Date(),
        uniqueId: Math.round(Math.random() * 10000),
      });
    });

  }

  // makes volunteer unavailable to get connected with someone else
  takeVolunteer = () => {
    fetch('https://oyabackend.herokuapp.com/avail/chat', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        match: this.state.match
      })
    }).then(
      console.log("connected with volunteer")
    )
      .catch(err => console.warn(err))
  }

  handleUser = async () => {
    try {
      let volunteer = await AsyncStorage.getItem('firstname');

      if (volunteer) {
        this.setState({ Volunteer: true })
      } else {
        this.setState({ User: true })
        this.takeVolunteer()
      }
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  _getChatRoom = async () => {
    // GET SOCKET ID AND SET THE STATE in local storage
    try {
      let socket = await AsyncStorage.getItem('socket' || 'Vsocket');
      this.setState({ chatRoomId: socket })
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  componentWillUnmount() { }

  setMessages(messages) {
    this._messages = messages;

    // append the message
    this.setState({
      messages: messages,
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  handleReceive(message = {}) {
    // make sure that your message contains :
    // text, name, image, position: 'left', date, uniqueId
    this.setMessages(this._messages.concat(message));
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