import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import Draggable, { DraggableData, DraggableEvent, DraggableProps } from 'react-draggable';

import { getRandomCardFromDict, cardDict } from "../utilities/cardmanager";
import { card8 } from "../utilities/card";
const gods = [require("../assets/god_of_beauty.png"), require("../assets/god_of_forge.png"), require("../assets/god_of_harvest.png"), require("../assets/god_of_hunt.png"), require("../assets/god_of_parties.png"), require("../assets/god_of_the_sun.png"), require("../assets/god_of_wisdom.png"), require("../assets/queen_of_underworld.png"), require("../assets/ruler_of_the_gods.png")];

const Card = ({ onStatsChange, textStyle, cardStyle, windowWidth, windowHeight }) => {
  const [currentCard, setCurrentCard] = useState(card8);
  const [direction, setDirection] = useState(1);


  const handleChoice = () => {
    if (direction == 0) {
      onStatsChange(currentCard.possibleVals[0]);
    } else if (direction == 2) {
      onStatsChange(currentCard.possibleVals[2]);
    } else {
      return;
    }

    setCurrentCard(getRandomCardFromDict(cardDict));
    console.log("New Card: " + currentCard);
    setDirection(1);
  }

  const handleDrag = (event, info) => {
    // console.log("X Pos " + info.x);
    // console.log("Window Width / 4 " + (windowWidth / 4 * -1));

    if (info.x < (windowWidth / 4 * -1)) {
      // console.log("Left Choice " + thisCard.choiceleft);
      setDirection(0);

      // setPrompt(thisCard.choiceleft);
    } else if (info.x > (windowWidth / 4)) {
      // console.log("Right Choice " + thisCard.choiceright);
      setDirection(2);
    } else {
      // console.log("Prompt: " + thisCard.prompt);
      setDirection(1);
    }
  }

  console.log(windowHeight);
  console.log(windowWidth);

  return (
    <View style={{ flexDirection: "column", justifyContent: "flex-start", alignItems: 'center', }}>
      <Text style={textStyle}>
        {currentCard.possiblePrompts[direction]}
      </Text>
      <Draggable
        position={{ x: 0, y: 0 }}
        scale={1}
        onDrag={handleDrag}
        onStop={handleChoice}
        bounds={{ left: (- (windowWidth / 2)), top: ((- windowHeight / 2)), right: ((windowWidth / 2)), bottom: ((windowHeight / 2)) }}>
        <View style={cardStyle}>
          <Image source={gods[currentCard.god]} style={{width: "100%", height: "100%"}} resizeMode='contain' />
        </View>
      </Draggable>
    </View>
  );
}



export default Card;