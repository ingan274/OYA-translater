import style from './style';
import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import SocketIOClient from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  Platform,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';

class Message extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      userId: null,
      socket: '',
      roomNum: '',
    };

    this.determineUser = this.determineUser.bind(this);
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.on('message', this.onReceivedMessage);
    this.determineUser();
  }

  componentDidMount() {
    this.handleLOCALSTORAGE();
    this.takeVolunteer()
  }

  // makes volunteer unavailable to get connected with someone else
  takeVolunteer = () => {
    etch('https://oyabackend.herokuapp.com/avail/chat', {
      method: 'PUT',
      body: {
        room: this.state.socket
      }
    }).then(
      console.log("connected with volunteer")
    )
      .catch(err => console.warn(err))
  }

  handleLOCALSTORAGE = async () => {
    // GET SOCKET ID AND SET THE STATE in local storage
    try {
      let socket = await AsyncStorage.getItem('socket' || 'none');
      this.setState({ socket: socket })
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  /**
   * When a user joins the chatroom, check if they are an existing user.
   * If they aren't, then ask the server for a userId.
   * Set the userId to the component's state.
   */
  determineUser() {
    AsyncStorage.getItem(USER_ID)
      .then((userId) => {
        // If there isn't a stored userId, then fetch one from the server.
        if (!userId) {
          this.socket.emit('userJoined', null);
          this.socket.on('userJoined', (userId) => {
            AsyncStorage.setItem(USER_ID, userId);
            this.setState({ userId });
          });
        } else {
          this.socket.emit('userJoined', userId);
          this.setState({ userId });
        }
      })
      .catch((e) => alert(e));
  }

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
        <Text style={style.unavail}>We are connecting you to a Volunteer now. One moment please.</Text>
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
    navigate('Jobs');
  };
}

export default Message;
