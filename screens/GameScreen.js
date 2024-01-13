import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Stat from '../components/Stat';
import Card from '../components/Card';
import { StyleSheet, View, Image, ImageBackground, Dimensions, Platform } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pillarWidth = windowHeight * (720.0 / 1280.0);

const GameScreen = ({ stats, handleStats }) => {



  return (

    <ImageBackground source={require("../assets/pillar.png")} resizeMode='contain' style={styles.pillar}>
      <View style={styles.statsholder}>
        <Image source={require("../assets/stats.png")} resizeMode='contain' style={styles.stats} />
        <View style={styles.allmarkers}>
          <Stat statStyles={styles.glory} statMultiplier={stats[0]} pillarWidth={pillarWidth} />
          <Stat statStyles={styles.glamour} statMultiplier={stats[1]} pillarWidth={pillarWidth} />
          <Stat statStyles={styles.mortal} statMultiplier={stats[2]} pillarWidth={pillarWidth} />
          <Stat statStyles={styles.trickery} statMultiplier={stats[3]} pillarWidth={pillarWidth} />
        </View>
      </View>


      <Card onStatsChange={handleStats} textStyle={styles.pillarText} cardStyle={styles.card} windowWidth={windowWidth} windowHeight={windowHeight}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  pillar: {
    ...Platform.select({
      ios: {
        height: windowHeight,

        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      default: {
        height: windowHeight,

        alignItems: 'center',
        justifyContent: 'flex-start',
      }
    }),
  },
  statsholder: {
    ...Platform.select({
      ios: {
        marginTop: windowHeight * (0.12),
        width: pillarWidth * (0.6),
        height: pillarWidth * (0.6 * 0.25),

      },
      default: {
        marginTop: windowHeight * (0.04),
        width: pillarWidth * (0.7),
        height: pillarWidth * (0.7 * 0.25),

      },
    }),
    backgroundColor: "none",

  },
  stats: {

    ...Platform.select({
      ios: {
        width: pillarWidth * (0.6),
        height: (pillarWidth * (0.6 * 0.25)),
      },
      default: {
        width: pillarWidth * (0.7),
        height: (pillarWidth * (0.7 * 0.25)),
      },
    }),
    position: "absolute",
    zIndex: 1,
  },
  allmarkers: {
    ...Platform.select({
      ios: {
        width: pillarWidth * (0.6),
        height: pillarWidth * (0.6 * 0.25),
      },
      default: {
        width: pillarWidth * (0.7),
        height: pillarWidth * (0.7 * 0.25),

      },
    }),
    position: "absolute",
    zIndex: 0,

    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "gray",
  },
  glory: {
    backgroundColor: "goldenrod",
  },
  glamour: {
    backgroundColor: "pink",
  },
  mortal: {
    backgroundColor: "black",
  },
  trickery: {
    backgroundColor: "turquoise",
  },


  card: {
    ...Platform.select({
      ios: {
        width: ( pillarWidth / (1.7)),
        height: (pillarWidth / (1.7)),
        
      },
      default: {
        width: windowWidth / 4,
        height: windowWidth / 4,


      },
    }),
    backgroundColor: "transparent",


  },
  pillarText: {

    ...Platform.select({
      ios: {
        width: pillarWidth * (0.6),

        fontSize: 20,
      },
      default: {
        width: pillarWidth * (0.7),

        fontSize: 20,
      },
    }),

    textAlign: "center",
    color: "#696969",
    marginTop: windowHeight * (0.04),
    marginBottom: windowHeight * (0.02),

  },
});

export default GameScreen;