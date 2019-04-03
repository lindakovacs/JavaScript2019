import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text, Input, Button } from "react-native-elements";

/**
 * The value that user will guess. Generating random number with
 * @see https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 * @constant number
 */
const answer = Math.floor(Math.random() * (10 + 1));

export default function App() {
  /**
   * Setup additional items in state with the "useState" hook here. What you put inside state will
   * include the values that you will need to plugin or calculate below.
   */
  const [guesses, setGuesses] = useState([]);

  /**
   * The last guess that the user made.
   * @constant {number}
   */
  const latestGuess = guesses[guesses.length - 1];

  /**
   * Use this to handle an event and set state. (Or alternative, you can use an anonymous function).
   *
   * This is like your "method" with the React Component class. In the React Component Class,
   * you would have used "this.setState()" here. What are you going to use instead?
   *
   * HINT: you will need "parseInt()"
   */
  const guess = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {latestGuess === answer ? (
        <>
          <Text h2>You guessed correctly!</Text>
          {/* Display e.g. "The answer was 5" here */}
        </>
      ) : (
        <>
          {/**
           * Replace "true" below with a real condition. If the user has more than 0 rounds left, display
           * the <Input> part. Otherwise, display the answer and all the guesses.
           */}
          {true ? (
            <>
              <Text h1>Guessing Game</Text>
              {/* Display rounds here */}
              <Input
                placeholder="Guess a number between 1 and 10"
                keyboardType="number-pad"
                maxLength={2}
              />
              <Button title="Guess" raised={true} onPress={guess} />
              {/* Display "Too high!" or "Too low!" here */}
            </>
          ) : (
            <>
              {/* Display e.g. "The answer was 5!" here */}
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
