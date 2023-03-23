import React from 'react';

import Die from './Die';

export default function Dice({ dice, toggleDie, locked }) {
  const renderedDice = () => {
    return dice.map((dieVal, idx) => (
      <Die
        toggleDie={toggleDie}
        val={dieVal}
        idx={idx}
        key={idx}
        locked={locked[idx]}
      />
    ));
  };

  return <div>{renderedDice()}</div>;
}
