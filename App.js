import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOverScreen";

export default function App() {
  const [number, setValidNumber] = useState(-1);
  const [isGameOver, setGameOver] = useState(false);

  function validNumber(picked) {
    setValidNumber(picked);
  }
  function endGame() {
    setGameOver(true);
    setValidNumber(-1);
  }
  let screen = <StartGame pickNumber={validNumber} />;
  if (number != -1)
    screen = <GameScreen userNumber={number} endGame={endGame} />;
  if (isGameOver) screen = <GameOver />;
  return (
    <LinearGradient style={styles.rootScreen} colors={["#11bfe6", "#1fd675"]}>
      <ImageBackground
        source={require("./assets/images/numbers.jpg")}
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.4 }}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.mainSection}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  mainSection: {
    flex: 1,
    marginTop: 60,
  },
});
