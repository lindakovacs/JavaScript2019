import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import { SafeAreaView } from "react-native";

import NavBar from "../NavBar/NavBar";
import NowPlaying from "../NowPlaying/NowPlaying";
import Theatres from "../Theatres/Theatres";
import Movie from "../Movie/Movie";

const styles = {
  container: {
    marginBottom: 32
  }
};

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={NowPlaying} />
          <Route exact path="/theatres" component={Theatres} />
          <Route path="/movie/:title" component={Movie} />
        </Switch>
      </NativeRouter>
    </SafeAreaView>
  );
}

export default App;
