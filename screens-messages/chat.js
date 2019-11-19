import {AsyncStorage, Platform} from 'react-native';

exports.request = async (method, url, data) => {
  let response = await fetch(url, {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: data ? JSON.stringify(data) : null,
  });

  if(response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    throw new Error(response.status + " " + response._bodyText);
  }
};

exports.serverIP = Platform.OS == "android" ? '10.0.2.2' : 'localhost';