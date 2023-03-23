import React, { useContext } from 'react';
import { StateContext } from './contexts/game.context';

import Die from './Die';

export default function Dice() {
  const state = useContext(StateContext);

  const renderedDice = () => {
    return state.dice.map((dieVal, id) => (
      <Die val={dieVal} id={id} key={id} locked={state.locked[id]} />
    ));
  };

  return <div>{renderedDice()}</div>;
}
