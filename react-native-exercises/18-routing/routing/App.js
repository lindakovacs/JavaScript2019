/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, SafeAreaView } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import RickMorty from "../src/components/RickMorty";
import RonSwanson from "../src/components/RonSwanson";
import Menu from "../src/components/Menu";
import Users from "../src/components/Users";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NativeRouter>
          <Route exact path="/" component={Menu} />
          <Route exact path="/RickMorty" component={RickMorty} />
          <Route exact path="/RonSwanson" component={RonSwanson} />
          <Route exact path="/Users" component={Users} />
        </NativeRouter>
      </SafeAreaView>
    );
  }
}

const styles =  {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
};

export default App;