import React, { useContext } from 'react';

import './HeaderDice.css';

import Die from './Die';
import { FunctionsContext, StateContext } from './contexts/game.context';

export default function HeaderDice() {
  const state = useContext(StateContext);
  const { roll } = useContext(FunctionsContext);

  const renderedDice = () => {
    return state.dice.map((dieVal, id) => (
      <Die
        val={dieVal}
        id={id}
        key={id}
        locked={state.locked[id]}
        disabled={state.rollsLeft < 1}
      />
    ));
  };

  return (
    <section className='HeaderDice'>
      <h1 className='HeaderDice-title'>Yahtzee!</h1>
      <div className='HeaderDice-dice'>{renderedDice()}</div>
      <div>
        <button
          onClick={roll}
          className='HeaderDice-rollbtn'
          disabled={state.locked.every((i) => i === true)}
        >
          {state.rollsLeft} Rerolls Left
        </button>
      </div>
    </section>
  );
}
