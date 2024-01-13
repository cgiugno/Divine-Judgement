import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableHighlight } from 'react-native';
import { endings } from '../utilities/endingManager';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pillarWidth = windowHeight * (720.0 / 1280.0) * 0.55;

const CompleteScreen = ({ resetStats, toggleGameOver, resetTurnCount, stats }) => {
    var ending = null;

    if (stats.length > 0) {
        for (var i = 0; i <= stats.length; i++) {
            if (stats[i] >= 1) {
                ending = endings[0][i];
            } else if (stats[i] <= 0) {
                ending = endings[1][i];
            }
        }
        if (ending === null) {
            console.log(endings[2]);
            ending = endings[2];
        }
    } else {
        ending = "There has been a problem. Even more than the ones the gods are giving you."
    }

    return (
        <ImageBackground source={require("../assets/endgame_nobackground.png")} resizeMode='contain' style={styles.gameEndContainer}>

            <View style={styles.gameEndText}>
                <Text style={styles.title}>Game Over</Text>
                <Text style={styles.body}>
                    {ending}
                </Text>
                <TouchableHighlight activeOpacity={0.8} underlayColor={'#989898'} style={styles.newGameButton} onPress={() => { resetStats(); resetTurnCount(); toggleGameOver(); }}>
                    <Text style={styles.newGameButtonText}>
                        Try Once More
                    </Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    gameEndContainer: {
        height: windowHeight * 0.8,

        alignItems: 'center',
        justifyContent: 'center',
    },
    gameEndText: {
        width: pillarWidth,
        height: windowHeight * 0.8,


        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    title: {
        fontSize: 50,
        marginTop: 100,
        marginBottom: 80,
        color: 'gray',
        textAlign: 'center',
    },
    body: {
        fontSize: 16,
        color: 'gray',

        textAlign: 'center',
    },
    newGameButton: {
        alignSelf: 'center',
        elevation: 8,
        backgroundColor: '#A9A9A9',

        paddingTop: 8,
        paddingBottom: 10,

        paddingLeft: 25,
        paddingRight: 25,

        borderRadius: 10,

        marginTop: 25,

    },
    newGameButtonText: {
        color: '#696969',
    }
});

export default CompleteScreen;