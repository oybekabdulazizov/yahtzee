import React, { useContext } from 'react';

import './HeaderDice.css';

import Die from './Die';
import { FunctionsContext, StateContext } from './contexts/game.context';

export default function HeaderDice() {
  const { dice, locked, rollsLeft, rolling } = useContext(StateContext);
  const { animateRoll } = useContext(FunctionsContext);

  const renderedDice = () => {
    return dice.map((dieVal, id) => (
      <Die val={dieVal} id={id} key={id} locked={locked[id]} />
    ));
  };

  let rerollBtnText =
    rollsLeft === 1 ? '1 Roll Left' : `${rollsLeft} Rolls Left`;

  return (
    <section className='HeaderDice'>
      <h1 className='HeaderDice-title'>Yahtzee!</h1>
      <div className='HeaderDice-dice'>{renderedDice()}</div>
      <div>
        <button
          onClick={animateRoll}
          className='HeaderDice-rollbtn'
          disabled={locked.every((x) => x) || rollsLeft === 0 || rolling}
        >
          {rerollBtnText}
        </button>
      </div>
    </section>
  );
}
