import { useState } from 'react';

export default function useGameState() {
  const NUMBER_OF_DICE = 5;
  const NUMBER_OF_ROLLS = 3;
  const [state, setState] = useState({
    dice: Array.from({ length: NUMBER_OF_DICE }).fill(0),
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
  });

  const roll = () => {
    if (state.rollsLeft > 0) {
      setState((prevState) => ({
        ...prevState,
        dice: prevState.dice.map((die, idx) =>
          prevState.locked[idx] ? die : Math.ceil(Math.random() * 6)
        ),
        locked:
          prevState.rollsLeft > 1
            ? prevState.locked
            : Array.from({ length: NUMBER_OF_DICE }).fill(true),
        rollsLeft: prevState.rollsLeft - 1,
      }));
    }
  };

  const toggleDie = (id) => {
    if (state.rollsLeft > 0 && !state.dice.includes(0)) {
      setState((prevState) => ({
        ...prevState,
        locked: [
          ...prevState.locked.slice(0, id),
          !prevState.locked[id],
          ...prevState.locked.slice(id + 1),
        ],
      }));
    }
  };

  const doScore = (ruleName, rule) => {
    setState((prevState) => ({
      ...prevState,
      scores: { ...prevState.scores, [ruleName]: rule(state.dice) },
      rollsLeft: NUMBER_OF_ROLLS,
      locked: Array.from({ length: NUMBER_OF_DICE }).fill(false),
    }));
    roll();
  };

  return { state, roll, toggleDie, doScore };
}
