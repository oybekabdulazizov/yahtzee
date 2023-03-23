import React, { useContext } from 'react';

import Dice from './Dice';
import { FunctionsContext, StateContext } from './contexts/game.context';

export default function HeaderDice() {
  const state = useContext(StateContext);
  const { roll } = useContext(FunctionsContext);

  return (
    <section>
      <Dice />
      <div>
        <button onClick={roll} disabled={state.locked.every((i) => i === true)}>
          {state.rollsLeft} Rerolls left
        </button>
      </div>
    </section>
  );
}
