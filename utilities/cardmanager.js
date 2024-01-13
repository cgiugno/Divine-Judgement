import { card8, card9, card10, card11, card12, card13 } from "./card";


class CardSequence {
    constructor(cardSet) {
        this.cardSet = cardSet;
        this.tracker = 0;
    }

    // Get the set associated with the sequence
    getCardSet() {
        return this.cardSet;
    }
    // Get the current card in the sequence
    getCurrentCard() {
        var cardToReturn;
        console.log("Tracker: " + this.tracker);
        console.log("Length: " + this.cardSet.length);
        
        if (this.tracker < this.cardSet.length) {
            cardToReturn = this.cardSet[this.tracker];
            this.tracker += 1;
        } else {
            this.resetTracker();
            cardToReturn = this.cardSet[this.tracker];
            this.tracker += 1;
        }
        return cardToReturn;
    }
    // Add a card to the sequence
    addCard() {
        this.cardSet.add()
    }
    // Reset the tracker to the beginning
    resetTracker() {
        this.tracker = 0;
    }
}

const cardsequence8 = new CardSequence([card8]);
const cardsequence9 = new CardSequence([card9]);
const cardsequence10 = new CardSequence([card10]);
const cardsequence11 = new CardSequence([card11]);
const cardsequence12 = new CardSequence([card12]);
const cardsequence13 = new CardSequence([card13]);

export const cardDict = {
    8: cardsequence8,
    9: cardsequence9,
    10: cardsequence10,
    11: cardsequence11,
    12: cardsequence12,
    13: cardsequence13,
};

// Return the next card in a random sequence
export function getRandomCardFromDict(dict) {
    const randomIndex = Math.floor((Math.random() * Object.keys(dict).length) + 8);
    console.log("Card Index: " + randomIndex);
    return cardDict[randomIndex].getCurrentCard();
}