import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Menu from './components/Menu';
import Rick from './components/Rick';
import Ron from './components/Ron';
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Route exact path="/" component={Menu} />
        <Route exact path="/Rick" component={Rick} />
        <Route exact path="/Ron" component={Ron} />
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
