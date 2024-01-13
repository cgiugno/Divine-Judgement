import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, Text } from 'react-native';
import GameScreen from './screens/GameScreen';
import CompleteScreen from './screens/CompleteScreen';

const dayNightTurns = 5;
const winCondTurns = 6;


export default function App() {
  const [stats, setStats] = useState([0.5, 0.5, 0.5, 0.5]);
  const [gameOver, setGameOver] = useState(false);
  const [turnCount, setTurnCount] = useState(1);

  const areStatsInitial = () => {
    var initial = true;
    for (var i = 0; i < stats.length; i++) {
      if (stats[i] !== 0.5) {
        initial = false;
      }
    }
    return initial;
  };

  const handleStats = (toAdd) => {
    var newStats = [...stats]

    for (var i = 0; i < toAdd.length; i++) {
      newStats[i] += toAdd[i];
    }

    setStats(newStats);
    console.log(stats);
  }

  const resetStats = () => {
    setStats([0.5, 0.5, 0.5, 0.5]);
  }

  const toggleGameOver = () => {
    setGameOver(!gameOver);
  }

  const resetTurnCount = () => {
    setTurnCount(1);
  }

  useEffect(() => {
    console.log("Pre Turn Coat: " + turnCount);
    console.log((turnCount % (dayNightTurns * 2) >= dayNightTurns));
    for (var i = 0; i < stats.length; i++) {
      if (stats[i] <= 0 || stats[i] >= 1) {
        console.log("Game Over");
        setGameOver(true);
        return;
      }
    }
    if (turnCount >= winCondTurns) {
      console.log("Game Over (Win).");
      setGameOver(true);
      return;
    }
    if (areStatsInitial() == false) {
      setTurnCount(turnCount + 1);
      console.log("After Turn Count: " + turnCount);
      console.log((turnCount % (dayNightTurns * 2) >= dayNightTurns));
    }

  }, [stats]);

  if (gameOver) {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={(turnCount % (dayNightTurns * 2) >= dayNightTurns) ? require("./assets/stars.png") : require('./assets/clouds.png')} style={styles.image}>
          <CompleteScreen resetStats={resetStats} toggleGameOver={toggleGameOver} resetTurnCount={resetTurnCount} stats={stats} />
          <StatusBar style="auto" />
        </ImageBackground>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={(turnCount % (dayNightTurns * 2) >= dayNightTurns) ? require("./assets/stars.png") : require("./assets/clouds.png")} style={styles.image}>
          <GameScreen stats={stats} handleStats={handleStats} />
          <StatusBar style="auto" />
        </ImageBackground>
      </SafeAreaView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

});
