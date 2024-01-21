import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-materialize";

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const handleLetterPress = (letter) => {
    if (guessedLetters.includes(letter)) {
      return;
    }

    const newWordToGuess = wordToGuess.split("").map((l) => {
      if (l === letter) {
        return l;
      } else {
        return "*";
      }
    });

    const newGuessedLetters = [...guessedLetters, letter];

    if (newWordToGuess.includes("*")) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }

    setWordToGuess(newWordToGuess.join(""));
    setGuessedLetters(newGuessedLetters);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wordToGuess}>{wordToGuess}</Text>
      <Text style={styles.guessedLetters}>
        Guessed Letters: {guessedLetters.join(", ")}
      </Text>
      <Text style={styles.incorrectGuesses}>
        Incorrect Guesses: {incorrectGuesses}
      </Text>
      <View style={styles.keyboard}>
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
          <TouchableOpacity
            key={letter}
            style={styles.keyboardButton}
            onPress={() => handleLetterPress(letter)}
          >
            <Text style={styles.keyboardButtonText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        title="Materialize Button"
        onPress={() => console.log("Materialize button pressed")}
        style={styles.materializeButton}
        textStyles={styles.materializeButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  wordToGuess: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },
  guessedLetters: {
    fontSize: 20,
    marginBottom: 8,
  },
  incorrectGuesses: {
    fontSize: 20,
    color: "red",
    marginBottom: 16,
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  keyboardButton: {
    backgroundColor: "#3490dc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 4,
    borderRadius: 4,
  },
  keyboardButtonText: {
    color: "white",
    fontSize: 16,
  },
  materializeButton: {
    backgroundColor: "#38a169",
    paddingVertical: 12,
    borderRadius: 4,
  },
  materializeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Hangman;
