import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { Link } from "react-router-native";

import movies from "../../../assets/movies";

const styles = {
  container: {
    paddingHorizontal: 8
  },
  title: {
    fontSize: 40,
    marginVertical: 12
  },
  movie: {
    borderTopWidth: 1,
    borderTopColor: "rgb(225, 225, 225)",
    marginBottom: 24
  },
  movieTitle: {
    fontSize: 24,
    marginVertical: 8
  },
  moviePoster: {
    width: 200,
    height: 300
  }
};

function NowPlaying() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>
      {Object.entries(movies).map(([movieKey, movie], index) => {
        const key = `movie-${index}`;
        const link = "/movie/" + movieKey;
        return (
          <View key={key} style={styles.movie}>
            <Link to={link}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
            </Link>
            <Link to={link}>
              <Image
                source={{ uri: movie.poster }}
                style={styles.moviePoster}
              />
            </Link>
          </View>
        );
      })}
    </ScrollView>
  );
}

export default NowPlaying;
