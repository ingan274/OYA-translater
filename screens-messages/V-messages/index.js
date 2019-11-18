import style from './style';
import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
// import SocketIOClient from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';

const USER_ID = '@userId';
const socketIO = require("socket.io");
const socket = io('/talk');

class Message extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userId: null,
      Vsocket: '',
      roomNum: '',
    };

    this.determineUser = this.determineUser.bind(this);
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    // this.socket = SocketIOClient('http://localhost:3000');
    this.io = socketIO(http);
    this.socket.on('message', this.onReceivedMessage);
    this.determineUser();
  }

  componentDidMount() {
    this.handleLOCALSTORAGE()
  }

  handleLOCALSTORAGE = async () => {
    // GET SOCKET ID AND SET THE STATE in local storage
    try {
      let socket = await AsyncStorage.getItem('Vsocket'|| 'none');
      this.setState({Vsocket: socket})
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  breakConnection = () => {
    fetch('https://oyabackend.herokuapp.com/stop/chat', {
      method: 'PUT'
    }).then((res) => {
     console.log("connection is broken") 
    })
      .catch(err => console.warn(err))
  }
  /**
   * When a user joins the chatroom, check if they are an existing user.
   * If they aren't, then ask the server for a userId.
   * Set the userId to the component's state.
   */
  // determineUser() {
  //   AsyncStorage.getItem(USER_ID)
  //     .then((userId) => {
  //       // If there isn't a stored userId, then fetch one from the server.
  //       if (!userId) {
  //         this.socket.emit('userJoined', null);
  //         this.socket.on('userJoined', (userId) => {
  //           AsyncStorage.setItem(USER_ID, userId);
  //           this.setState({ userId });
  //         });
  //       } else {
  //         this.socket.emit('userJoined', userId);
  //         this.setState({ userId });
  //       }
  //     })
  //     .catch((e) => alert(e));
  // }

  // Event listeners
  /**
   * When the server sends a message to this.
   */
  // onReceivedMessage(messages) {
  //   this._storeMessages(messages);
  // }

  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  onSend(messages = []) {
    this.socket.emit('message', messages[0]);
    // this._storeMessages(messages);
  }

  chatLoad = () => {
    if (this.state.userId) {
      return (
        <GiftedChat
            messages={this.state.messages}
            onSend={this.onSend}
            user={user}
          />
      )
    } else {
      return (
        <Text style={style.unavail}>Please go back and set messages as available with the toggle.</Text>
      )
    }
  }

  render() {
    var user = { _id: this.state.userId || -1 };

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
          <TouchableOpacity style={style.finishchat} onPress={this.breakConnection}>
          <Text style={style.finishchattext} >Finish Conversation </Text>
          <Ionicons
            name={
              Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'
            }
            size={30}
            style={style.back}
            onPress={this.handleBackPress}
          />
          </TouchableOpacity>
        </View>
        <View style={style.Textcontainer}>
         {this.chatLoad()}
        </View>
      </View>

    );
  }

  // Helper functions
  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }


  handleBackPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Account');
  };
}

export default Message;
