// THIS IS FOR EVENT SOURCE THAT CATCHES THE INFO AND PASSES THE ITEMS INTO THE APP.JS
import App from "../App"
import React, { PureComponent } from 'react';

// class set up that renders the app and pass props (this page passes data to app.js that will process the data and pass it through to display of in app navigator)

// example
const evtSource = new EventSource("HEROKU_URL");

// logic to add a line into chat
// evtSource.onmessage = function (event) {
//     const newElement = document.createElement("li");
//     const eventList = document.getElementById("list");

//     newElement.innerHTML = "message: " + event.data;
//     eventList.appendChild(newElement);
// }

class MessageData extends PureComponent {
   render() {
       return (
           <App /> // in here i will add a prop that will send update to chat
       )
   }
}

export default MessageData;