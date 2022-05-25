import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font"
import { AppLoading } from "expo-app-loading"

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  // if (!fontsLoaded) {
  //   return <AppLoading/>
  // }
  // returnuje mi undefined :))

  const [number, setNumber] = useState()
  const pickedNumberHandler = (pickedNumber) => {
    setNumber(pickedNumber)
    setgameEnd(false)
  }

  const [attempts, setAttempts] = useState(1)
  const attemptsHandler = () => {
    setAttempts(attempts+1)
  }

  const [gameEnd, setgameEnd] = useState(false)
  const gameEndHandler = (end) => {
    setgameEnd(end)
  }

  const restart = () => {
    setNumber(null)
    setAttempts(1)
    setgameEnd(false)
  }

let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

if (number){
  screen = <GameScreen attempts={attempts} onAttempts={attemptsHandler} number={number} onGameOver={gameEndHandler}/>
  console.log("Number is "+number)
}

if (gameEnd){
  screen = <GameOverScreen restart={restart} attempts={attempts} number={number}/>
}

  return (
    <>
    <StatusBar style="auto" />
    <LinearGradient style={styles.container} colors={["#0D324D", "#7F5A83"]}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.container}
      >
        <SafeAreaView        
          style={styles.container}
        >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
