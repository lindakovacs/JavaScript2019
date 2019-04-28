import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text, Input, Button } from "react-native-elements";

/**
 * Generating random number
 * @see https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
const answer = Math.floor(Math.random() * (10 + 1));

export default function App() {
  const [round, setRound] = useState(3);
  const [value, setValue] = useState("");
  const [guesses, setGuesses] = useState([]);
  const latestGuess = guesses[guesses.length - 1];

  const guess = () => {
    if (!value) return;
    setGuesses([...guesses, parseInt(value)]);
    setRound(round - 1);
    setValue("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {latestGuess === answer ? (
        <>
          <Text h2>You guessed correctly!</Text>
          <Text>The answer was {answer}.</Text>
        </>
      ) : (
        <>
          {round > 0 ? (
            <>
              <Text h1>Guessing Game</Text>
              <Text>Round: {round}</Text>
              <Input
                placeholder="Guess a number between 1 and 10"
                keyboardType="number-pad"
                maxLength={2}
                value={value}
                onChangeText={text => setValue(text)}
              />
              <Button title="Guess" raised={true} onPress={guess} />
              {latestGuess && latestGuess > answer && <Text h4>Too high!</Text>}
              {latestGuess && latestGuess < answer && <Text h4>Too low!</Text>}
            </>
          ) : (
            <>
              <Text h2>The answer was {answer}!</Text>
              <Text>Your guesses: {guesses.join(", ")}</Text>
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
