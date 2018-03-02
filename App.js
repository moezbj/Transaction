import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";
import reducers from "./src/reducers";
import LibraryList from "./src/components/LibraryList";
import { Button } from "./src/components/common";
import { Spinner } from "./src/components/common/Spinner";

class App extends React.Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAzSwMWvcaxmcalDkfc4KAQQutxycTFWs0",
      authDomain: "authentification-53f9d.firebaseapp.com",
      databaseURL: "https://authentification-53f9d.firebaseio.com",
      projectId: "authentification-53f9d",
      storageBucket: "authentification-53f9d.appspot.com",
      messagingSenderId: "650724050173"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return <View>{this.renderContent()}</View>;
  }
}

export default class Application extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
