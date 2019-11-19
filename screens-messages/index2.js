import React, { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PureComponent } from 'react-native';
import GiftedMessenger from 'react-native-gifted-messenger';
import chat from './chat';
import { Ionicons } from '@expo/vector-icons';

// You need to set `window.navigator` to something in order to use the socket.io
// client. You have to do it like this in order to use the debugger because the
// debugger in React Native runs in a webworker and only has a getter method for
// `window.navigator`.
// Remove this after socket.io releases with this patch
// https://github.com/socketio/engine.io-parser/pull/55
if (window.navigator && Object.keys(window.navigator).length == 0) {
  window = Object.assign(window, { navigator: { userAgent: 'ReactNative' } });
}

var io = require('socket.io-client/socket.io');

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    // this server need to change in chat
    const socketServer = 'http://' + chat.serverIP + ':4000';

    const options = { transports: ['websocket'], forceNew: true };
    this.socket = io(socketServer, options);

    this._messages = [];

    this.state = {
      messages: this._messages,
      isLoadingEarlierMessages: false,
      allLoaded: false,
      chatRoomId: null,
      page: 0,
      userID: null
    };
  }

  componentDidMount() {
    this._getChatRoom();

    this.socket.emit('add user', this.props.userID);

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

    // this.handleLOCALSTORAGE();
    // this.takeVolunteer()

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
        socket: this.state.socket
      })
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

  componentWillUnmount() { }

  _getChatRoom = async () => {
    try {

      let data = {
        sender_id: this.props.senderId,
        recipient_id: this.props.recipientId
      }

      let response = await API.request('POST', 'http://' + chat.serverIP + ':3000/v1/chat_rooms', data);
      console.log("get chat room", JSON.stringify(response));

      let chatRoomId = response.chat_room_id;
      console.log('chatRoomId', chatRoomId);

      this.setState({ chatRoomId: chatRoomId });

      this._getChatMessages();
    } catch (error) {
      console.error("_getChatRoom error: ", error);
    }
  }

  _getChatMessages = async () => {
    try {
      // display a loader until you retrieve the messages from your server
      this.setState({
        isLoadingEarlierMessages: true,
        page: this.state.page + 1
      });

      let accessToken = await API.getToken();

      let response = await API.request('GET', 'http://' + API.serverIP + ':3000/v1/chat_rooms/' + this.state.chatRoomId + '/chat_messages/page/' + this.state.page, null, accessToken);
      console.log("get chat messages", JSON.stringify(response));

      if (response.length == 0) {
        this.setState({
          isLoadingEarlierMessages: false, // hide the loader
          allLoaded: true, // hide the `Load earlier messages` button
        });
        return;
      }

      //let chatMessages = response;
      let chatMessages = response.reverse();
      console.log('chat messages', chatMessages);

      let earlierMessages = [];

      for (let msg of chatMessages) {
        if (this._messages.find(m => m.uniqueId === msg.chat_message_id)) {
          continue;
        }
        earlierMessages.push({
          text: msg.message,
          name: (msg.user_id == this.props.senderId) ? this.props.senderEmail : this.props.recipientEmail,
          image: null,
          position: (msg.user_id == this.props.senderId) ? 'right' : 'left',
          date: new Date(msg.created_at),
          uniqueId: msg.chat_message_id
        });
      }

      setTimeout(() => {
        this.setState({
          isLoadingEarlierMessages: false,
        });
        this.setMessages(earlierMessages.concat(this._messages));
      }, 500);

    } catch (error) {
      console.error("_getChatMessages error: ", error);
    }
  }

  setMessages(messages) {
    this._messages = messages;

    // append the message
    this.setState({
      messages: messages,
    });
  }

  handleSend(message = {}) {
    message.uniqueId = Math.round(Math.random() * 10000); // simulating server-side unique id generation
    this.setMessages(this._messages.concat(message));

    this.socket.emit('new message', {
      message: message.text,
      chatRoomId: this.state.chatRoomId,
      senderId: this.props.senderId,
      recipientId: this.props.recipientId
    });
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
          <GiftedMessenger
            ref={(c) => this._GiftedMessenger = c}

            autoFocus={false}
            blurOnSubmit={true}
            submitOnReturn={true}
            keyboardShouldPersistTaps={false}
            maxHeight={Dimensions.get('window').height - Navigator.NavigationBar.Styles.General.NavBarHeight - STATUS_BAR_HEIGHT}

            messages={this.state.messages}
            handleSend={this.handleSend.bind(this)}

            loadEarlierMessagesButton={!this.state.allLoaded}
            isLoadingEarlierMessages={this.state.isLoadingEarlierMessages}
            onLoadEarlierMessages={this._getChatMessages.bind(this)}
          />
        </View>
      </View >
    );
  }


  handleBackPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Jobs');
  };
}

module.exports = ChatRoom;