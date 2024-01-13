export class Card {
    constructor(thisGod, thisId, thisPrompt, thisChoiceLeft, thisChoiceRight, thisValsLeft, thisValsRight) {
        this._god = thisGod;
        this._id = thisId;
        this._prompt = thisPrompt;
        this._choiceleft = thisChoiceLeft;
        this._choiceright = thisChoiceRight;
        this._valsLeft = thisValsLeft;
        this._valsRight = thisValsRight;
        this._possiblePrompts = [thisChoiceLeft, thisPrompt, thisChoiceRight];
        this._possibleVals = [thisValsLeft, [], thisValsRight];
    }

    get god() {
        return this._god;
    }
    get id() {
        return this._id;
    }
    get prompt() {
        return this._prompt;
    }
    get choiceleft() {
        return this._choiceleft;
    }
    get choiceright() {
        return this._choiceright;
    }
    get valsLeft() {
        return this._valsLeft;
    }
    get valsRight() {
        return this._valsRight;
    }
    get leftGlory() {
        if (this._valsLeft.length > 0) {
            return this._valsLeft[0];
        }
        else {
            return 0;
        }
    }
    get leftGlamour() {
        if (this._valsLeft.length > 1) {
            return this._valsLeft[1];
        }
        else {
            return 0;
        }
    }
    get leftMortal() {
        if (this._valsLeft.length > 2) {
            return this._valsLeft[2];
        }
        else {
            return 0;
        }
    }
    get leftTrickery() {
        if (this._valsLeft.length > 3) {
            return this._valsLeft[3];
        }
        else {
            return 0;
        }
    }
    get rightGlory() {
        if (this._valsRight.length > 0) {
            return this._valsRight[0];
        }
        else {
            return 0;
        }
    }
    get rightGlamour() {
        if (this._valsRight.length > 1) {
            return this._valsRight[1];
        }
        else {
            return 0;
        }
    }
    get rightMortal() {
        if (this._valsRight.length > 2) {
            return this._valsRight[2];
        }
        else {
            return 0;
        }
    }
    get rightTrickery() {
        if (this._valsRight.length > 3) {
            return this._valsRight[3];
        }
        else {
            return 0;
        }
    }

    get possiblePrompts() {
        return this._possiblePrompts;
    }

    get possibleVals() {
        return this._possibleVals;
    }
}

export const card8 = new Card(
    1, 
    8, 
    "Look, I...know this isn't technically in your job description. But I need someone who can die to test this potion for me.",
    "Heck, no.",
    "Why not?",
    [-0.1, 0.0, 0.1, 0.0],
    [0.1, 0.0, -0.2, 0.0]);
export const card9 = new Card(
    1,
    9,
    "I just made this fantastic sword, Larger Knife, and now I need a way to keep people from using it. Just the riff-raff, I mean. Any ideas?",
    "Whoever be worthy, they shall gain the powers of 'Larger Knife'",
    "Make a misleading contract that says you get all the treasure they get.",
    [0.1, 0.0, 0.0, -0.1],
    [-0.1, 0.0, 0.0, 0.1],
);
export const card10 = new Card(
    5, 
    10,
    "Quick! The prophets are beseeching me and I need something memorable!",
    "Something vague that they could interpret as anything",
    "Rip your shirt off!",
    [0.0, 0.0, 0.0, 0.1],
    [0.0, 0.1, 0.0, -0.1],
);
export const card11 = new Card(
    3,
    11,
    "All of the other gods have cool creatures like lions and peacocks to represent them. What about me?",
    "Baby seal. Everyone likes a god with baby seals.",
    "Deer. Every time someone catches one, they have to pray to you.",
    [-0.1, 0.1, 0.0, 0.0],
    [0.1, 0.0, 0.0, 0.0],
);
export const card12 = new Card(
    8,
    12,
    "Oh no! The philosophers are attempting to formulate a theory of atheism! What do we do?",
    "Afflict the humans with boils.",
    "'Create 'double-Atheism': atheism but with enough loopholes it still says gods exist.",
    [0.0, -0.3, -0.3, 0.0],
    [-0.2, 0.0, 0.0, 0.1],
);
export const card13 = new Card(
    8,
    13,
    "So, I just found a glade full of beautiful nymphs that seem sort of into me. Any thoughts on how to choose which one to romance?",
    "Uh, your wife...?",
    "Whoever finds you most attractive...as a bull.",
    [0.0, 0.0, 0.0, -0.1],
    [0.0, 0.0, 0.0, 0.1],
);
