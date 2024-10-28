import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let lower = 1;
let higher = 99;
export default function GameScreen({ userNumber, endGame }) {
  //   const [min, setMin] = useState(1);
  //   const [max, setMax] = useState(99);
  const guess = randomNumber(lower, higher);
  const [deviceGuess, setGuess] = useState(guess);

  useEffect(() => {
    // console.log("IN effect");
    // console.log(userNumber, deviceGuess);
    if (userNumber == deviceGuess) {
      //   console.log("Found");
      endGame();
    }
  });

  function onHigher() {
    // setMin(deviceGuess);
    lower = deviceGuess + 1;
    setGuess(randomNumber(lower, higher));
  }
  function onLower() {
    higher = deviceGuess;
    setGuess(randomNumber(lower, higher));
  }

  return (
    <View style={styles.gameView}>
      <View style={styles.titleContainer}>
        <Title text="Opponents Guess" />
      </View>
      <Text style={styles.guessText}>{deviceGuess}</Text>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonGroup}>
          <PrimaryButton children="+" onPress={onHigher} />
          <PrimaryButton children="-" onPress={onLower} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  guessText: {
    fontSize: 24,
    textAlign: "center",
    color: "#5022d0",
  },
  titleContainer: {
    borderWidth: 2,
    borderColor: "#f11154",
    // maxWidth: "80%",
    padding: 8,
  },
  gameView: {
    flex: 1,
    alignItems: "center",
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    maxHeight: 40,
  },
  button: {},
});
