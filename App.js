import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./src/reducers";
import LibraryList from "./src/components/LibraryList";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
