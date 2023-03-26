import React, { useContext } from 'react';

import Die from './Die';
import { FunctionsContext, StateContext } from './contexts/game.context';

export default function HeaderDice() {
  const state = useContext(StateContext);
  const { roll } = useContext(FunctionsContext);

  const renderedDice = () => {
    return state.dice.map((dieVal, id) => (
      <Die val={dieVal} id={id} key={id} locked={state.locked[id]} />
    ));
  };

  return (
    <section>
      <div>{renderedDice()}</div>
      <div>
        <button onClick={roll} disabled={state.locked.every((i) => i === true)}>
          {state.rollsLeft} Rerolls left
        </button>
      </div>
    </section>
  );
}
