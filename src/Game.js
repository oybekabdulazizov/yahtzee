import React, { Component } from 'react';

const NUMBER_OF_DICE = 5;
const NUMBER_OF_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUMBER_OF_DICE }),
      locked: Array.from({ length: NUMBER_OF_DICE }).fill(false),
      rollsLeft: NUMBER_OF_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
  }

  render() {
    return <div></div>;
  }
}

export default Game;
