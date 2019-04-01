import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

import movies from "../../../assets/movies";

const styles = {
  container: {
    paddingHorizontal: 8
  },
  title: {
    fontSize: 32,
    marginVertical: 12
  },
  movie: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "rgb(225, 225, 225)",
    marginBottom: 24
  },
  movieTitle: {
    flex: 1,
    fontSize: 24,
    marginVertical: 8
  },
  moviePoster: {
    width: 200,
    height: 300,
    marginVertical: 8
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 24
  },
  strong: {
    fontWeight: "bold"
  },
  showTimes: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  showTime: {
    flexGrow: 1,
    flexShrink: 0,
    marginHorizontal: 4
  }
};

function Movie(props) {
  const movieKey = props.match.params.title;
  const movie = movies[movieKey];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Image source={{ uri: movie.poster }} style={styles.moviePoster} />
      <Text style={styles.paragraph}>{movie.longSynopsis}</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.strong}>Release Date:</Text> {movie.releaseDate}
      </Text>
      <Text style={{ ...styles.paragraph, ...styles.strong }}>Show Times:</Text>
      <View style={styles.showTimes}>
        {movie.times.map((time, index) => {
          const key = `${movieKey}-time-${index}`;
          return (
            <Text key={key} style={styles.showTime}>
              {time}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Movie;
